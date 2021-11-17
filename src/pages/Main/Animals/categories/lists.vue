<template>
  <div>
    <div class="pa-1 lists">
      <v-form class="pa-0" elevation="0">
        <div class="d-flex justfy-content-center align-center">
          <v-text-field
            label="ID или имя"
            hide-details="auto"
            outlined
            color="accent"
            dense
            class="text-body-2 rounded-lg white"
            :append-icon="mdiFilterVariant"
            :prepend-inner-icon="mdiMagnify"
          ></v-text-field>
          <v-btn class="ml-3 accent rounded-lg" elevation="0">
            <v-icon> {{ mdiPlus }} </v-icon>
            <span class="text-none">Добавить животное</span>
          </v-btn>
        </div>
      </v-form>
      <div class="pt-4">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="desserts"
          :single-select="singleSelect"
          item-key="name"
          show-select
          class="elevation-1"
          :footer-props="{
            showFirstLastPage: true,
            firstIcon: mdiArrowCollapseLeft,
            lastIcon: mdiArrowCollapseRight,
            prevIcon: mdiChevronLeft,
            nextIcon: mdiChevronRight,
          }"
        >
          <template v-slot:[`item.actions`]="{}">
            <v-menu bottom left>
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
      mdiFilterVariant,
      mdiDotsHorizontal,
      mdiPlus,
      mdiChevronLeft,
      mdiChevronRight,
      mdiArrowCollapseRight,
      mdiArrowCollapseLeft,
      items: [
        { title: 'Расписание', icon: mdiCalendarRangeOutline },
        { title: 'Редактировать', icon: mdiPencil },
        { title: 'Переместить', icon: mdiArrowURightTop },
        { title: 'Удалить', icon: mdiDeleteOutline, isDelete: true },
      ],
      singleSelect: false,
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
        { text: '', value: 'actions' },
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
