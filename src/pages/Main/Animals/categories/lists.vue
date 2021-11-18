<template>
  <div>
    <div class="pa-1 lists">
      <v-form class="pa-0" elevation="0">
        <div class="d-flex justfy-content-center align-center">
          <!-- 
            @prepend icon mdi icon search
          -->
          <v-text-field
            label="ID или имя"
            hide-details="auto"
            outlined
            color="accent"
            dense
            class="text-body-2 rounded-lg white"
            :prepend-inner-icon="mdiMagnify"
          >
            <!-- 
              VMenu for modal dialog for filters
            -->
            <v-menu
              offset-y
              left
              nudge-bottom="10"
              bottom
              v-model="showFilter"
              min-width="auto"
              slot="append"
              :close-on-content-click="false"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="lock-button" v-bind="attrs" v-on="on">
                  {{ mdiFilterVariant }}
                </v-icon>
              </template>
              <v-card class="rounded-lg white sortByWidth">
                <div class="d-flex px-4 py-2 justify-between align-center">
                  <span class="text-h6 font-weight-bold">Фильтровать</span>
                  <v-btn icon class="ml-auto" @click="showFilter = false">
                    <v-icon>{{ mdiCloseCircleOutline }}</v-icon>
                  </v-btn>
                </div>
                <v-divider></v-divider>
                <div class="mx-3">
                  <div
                    class="d-flex my-3 align-center cursor-pointer"
                    v-for="(item, i) in filterMenu"
                    :key="i"
                  >
                    <v-autocomplete
                      hide-details="auto"
                      outlined
                      multiple
                      class="text-body-2"
                      :items="people"
                      :label="item.name"
                      v-model="selectedFilters[i]"
                    ></v-autocomplete>
                  </div>
                  <div>
                    <h4 class="font-weight-bold primary--text">Пол</h4>
                    <v-radio-group v-model="radios" row class="mt-2">
                      <v-radio value="All" color="accent">
                        <template v-slot:label>
                          <div>Все</div>
                        </template>
                      </v-radio>
                      <v-radio value="Samec">
                        <template v-slot:label>
                          <div>Самец</div>
                        </template>
                      </v-radio>
                      <v-radio value="Samka">
                        <template v-slot:label>
                          <div>Самка</div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </div>
                </div>
                <v-container>
                  <v-row>
                    <v-col cols="6" class="text-right pl-5 pr-2">
                      <v-btn
                        elevation="0"
                        color="accent"
                        class="text-none"
                        large
                        width="100%"
                      >
                        Применить
                      </v-btn>
                    </v-col>
                    <v-col cols="6" class="text-left pr-5 pl-2">
                      <v-btn
                        outlined
                        large
                        class="text-none font-weight-bold"
                        width="100%"
                      >
                        Сбросить
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-menu>
          </v-text-field>
          <v-btn class="ml-3 accent rounded-lg" elevation="0">
            <v-icon> {{ mdiPlus }} </v-icon>
            <span class="text-none">Добавить животное</span>
          </v-btn>
        </div>
      </v-form>
      <div class="helpers">
        <div
          v-if="selectedFilters.filter((res) => res.length > 0).length > 0"
          class="d-flex"
        >
          <div
            v-for="(item, i) in selectedFilters.filter((res) => res.length > 0)"
            :key="i"
            class="mt-3 mb-1"
          >
            <v-btn
              v-for="(it, i) in item"
              filter
              text
              :key="i"
              class="mr-2 white pl-3 pr-1 rounded-lg"
              outlined
            >
              <span class="primary--text text-none"> {{ it }}</span>
              <v-icon class="ml-1">
                {{ mdiCloseCircleOutline }}
              </v-icon>
            </v-btn>
          </div>
        </div>
        <div v-if="selected.length > 0" class="mt-4 mb-1 d-flex align-center">
          <h4>Выбрано: {{ selected.length }}</h4>
          <v-divider vertical class="mx-4 my-1"></v-divider>
          <v-btn depressed class="pa-0 ma-0" height="24px">
            <v-icon color="accent">
              {{ mdiArrowURightTop }}
            </v-icon>
            <span class="text-none accent--text text-body-2">Переместить</span>
          </v-btn>
          <v-divider vertical class="mx-4 my-1"></v-divider>
          <v-btn depressed class="pa-0 ma-0" height="24px">
            <v-icon color="error">
              {{ mdiDeleteOutline }}
            </v-icon>
            <span class="text-none error--text text-body-2">Удалить</span>
          </v-btn>
        </div>
      </div>
      <div class="pt-4">
        <!-- 
          Customized Template data table 
          @Headers = Column name
          @Items = Target info list
          @Single select      
          @Show select = showing the checkboxes for table
          @class = (elevation is -> box-shadow in css)
          @footerProps = Setting prev,last,next,first icons    
        -->
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          item-key="name"
          show-select
          class="elevation-1"
          color="black"
          item-class="black"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: mdiArrowCollapseLeft,
            lastIcon: mdiArrowCollapseRight,
            prevIcon: mdiChevronLeft,
            nextIcon: mdiChevronRight,
          }"
        >
          <template v-slot:[`item.data-table-select`]="{ isSelected, select }">
            <v-simple-checkbox
              :value="isSelected"
              @input="select($event)"
              color="accent"
            ></v-simple-checkbox>
          </template>
          <!-- 
            @Slot = shows modal of extra possibilites  
          --->
          <template v-slot:[`item.actions`]="{}">
            <!-- 
              Menu to show list of Edit, delete, show and move
            -->
            <v-menu bottom left :close-on-content-click="false">
              <template v-slot:activator="{ on, attrs }">
                <v-btn dark icon v-bind="attrs" v-on="on" color="primary">
                  <v-icon>{{ mdiDotsHorizontal }}</v-icon>
                </v-btn>
              </template>

              <v-list class="pa-0">
                <v-list-item-group>
                  <div v-for="(item, i) in items" :key="i">
                    <v-list-item class="d-flex align-center">
                      <v-icon
                        :class="
                          (item.isDelete ? 'error--text' : 'primary--text') + ' mr-2'
                        "
                        dark
                        >{{ item.icon }}</v-icon
                      >
                      <v-list-item-title
                        :class="(item.isDelete ? 'error--text' : '') + ' text-body-2'"
                        >{{ item.title }}</v-list-item-title
                      >
                    </v-list-item>
                    <v-divider></v-divider>
                  </div>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  mdiMagnify,
  mdiFilterVariant,
  mdiPlus,
  mdiDotsHorizontal,
  mdiChevronRight,
  mdiArrowCollapseRight,
  mdiChevronLeft,
  mdiCloseCircleOutline,
  mdiPencil,
  mdiCalendarRangeOutline,
  mdiArrowURightTop,
  mdiArrowCollapseLeft,
  mdiDeleteOutline,
} from '@mdi/js'
export default Vue.extend({
  data() {
    return {
      mdiMagnify,
      radios: 'All',
      mdiFilterVariant,
      mdiDotsHorizontal,
      mdiDeleteOutline,
      mdiPlus,
      selectedFilters: [[], [], [], []],
      mdiChevronLeft,
      showFilter: false,
      mdiChevronRight,
      mdiArrowCollapseRight,
      mdiArrowURightTop,
      mdiCloseCircleOutline,
      mdiArrowCollapseLeft,
      people: ['assa', 'sas'],
      filterMenu: [
        {
          name: 'Порода',
        },
        {
          name: 'Тип',
        },
        {
          name: 'Стойло',
        },
        {
          name: 'Группа',
        },
        {
          name: 'Статус',
        },
      ],
      items: [
        { title: 'Расписание', icon: mdiCalendarRangeOutline },
        { title: 'Редактировать', icon: mdiPencil },
        { title: 'Переместить', icon: mdiArrowURightTop },
        { title: 'Удалить', icon: mdiDeleteOutline, isDelete: true },
      ],
      selected: [],
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
        { text: '', value: 'actions', sortable: false },
      ],
      // desserts: [],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
          actions: true,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
          actions: true,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
          actions: true,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
          actions: true,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
          actions: true,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
          actions: true,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
          actions: true,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
          actions: true,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
          actions: true,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
          actions: true,
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.lists label {
  font-size: var(--font-size-sm);
}
</style>
