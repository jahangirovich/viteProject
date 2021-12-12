<template>
  <div>
    <div class="pa-1 lists">
      <ListSearchComponent
        :options="$options"
        :filterItems="filterItems"
        :tableLink="table.link"
        v-if="filterItems"
      />
      <div class="helpers" v-if="filterItems">
        <div
          v-if="filterItems.selectedFilters.filter((res) => res.length > 0).length > 0"
          class="d-flex"
        >
          <div
            v-for="(item, i) in filterItems.selectedFilters.filter(
              (res) => res.length > 0
            )"
            :key="i"
            class="mt-3 mb-1 d-flex"
          >
            <v-chip class="" color="white mr-2" close v-for="(it, i) in item" :key="i">
              {{ it }}
            </v-chip>
          </div>
        </div>
        <div
          v-if="filterItems.selectedItems.length > 0"
          class="mt-4 mb-1 d-flex align-center"
        >
          <h4>Выбрано: {{ filterItems.selectedItems.length }}</h4>
          <v-divider vertical class="mx-4 my-1"></v-divider>
          <v-btn
            depressed
            class="pa-0 ma-0"
            height="24px"
            v-for="(item, i) in table.selectedItemsActions"
            :key="i"
          >
            <v-icon :color="item.color">
              {{ item.icon }}
            </v-icon>
            <span :class="`text-none ${item.color}--text text-body-2`">{{
              item.title
            }}</span>
            <v-divider vertical class="mx-4 my-1"></v-divider>
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
          v-if="filterItems"
          v-model="filterItems.selectedItems"
          :headers="table.headers"
          :items="table.items"
          item-key="id"
          :show-select="filterItems"
          class="elevation-3"
          color="black"
          item-class="black"
          :footer-props="{
            showFirstLastPage: true,
            prevIcon: $options.icons.mdiChevronLeft,
            nextIcon: $options.icons.mdiChevronRight,
          }"
        >
          <template v-slot:[`item.${table.link.name}`]="{ item }" v-if="table.link">
            <router-link
              :to="table.link.href + `${item[table.link.name]}/profile`"
              class="accent--text"
              >{{ item[table.link.name] }}</router-link
            >
          </template>
          <template v-slot:[`no-data`]="">
            <v-img
              :src="require('@/assets/main/other/not_found.svg')"
              width="40px"
              class="mx-auto mt-2"
            />
            <div class="primary--text pt-2">Не найдено</div>
            <div class="primary--text pt-2 pb-2">Попробуйте изменить запрос</div>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <StatusBadge :status="item.status" />
          </template>
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
                  <v-icon>{{ $options.icons.mdiDotsHorizontal }}</v-icon>
                </v-btn>
              </template>

              <v-list class="pa-0">
                <v-list-item-group>
                  <div v-for="(item, i) in table.actionMenu" :key="i">
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
        <!-- 
          @Refactoring is mandatory !!!!!
        -->
        <v-data-table
          v-else
          :headers="table.headers"
          :items="table.items"
          item-key="id"
          class="elevation-1"
          color="black"
          item-class="black"
          :footer-props="{
            showFirstLastPage: true,
            prevIcon: $options.icons.mdiChevronLeft,
            nextIcon: $options.icons.mdiChevronRight,
          }"
        >
          <template v-slot:[`item.${table.link.name}`]="{ item }" v-if="table.link">
            <router-link
              :to="table.link.href + `${item[table.link.name]}/profile`"
              class="accent--text"
              >{{ item[table.link.name] }}</router-link
            >
          </template>
          <template v-slot:[`no-data`]="">
            <v-img
              :src="require('@/assets/main/other/not_found.svg')"
              width="40px"
              class="mx-auto mt-2"
            />
            <div class="primary--text pt-2">Не найдено</div>
            <div class="primary--text pt-2 pb-2">Попробуйте изменить запрос</div>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <StatusBadge :status="item.status" />
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
                  <v-icon>{{ $options.icons.mdiDotsHorizontal }}</v-icon>
                </v-btn>
              </template>

              <v-list class="pa-0">
                <v-list-item-group>
                  <div v-for="(item, i) in table.actionMenu" :key="i">
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
import {
  mdiMagnify,
  mdiFilterVariant,
  mdiPageFirst,
  mdiPageLast,
  mdiPlus,
  mdiDotsHorizontal,
  mdiChevronRight,
  mdiChevronLeft,
  mdiCloseCircleOutline,
  mdiArrowURightTop,
  mdiDeleteOutline,
} from '@mdi/js'

export default {
  props: ['filterItems', 'table'],
  icons: {
    mdiMagnify,
    mdiFilterVariant,
    mdiDotsHorizontal,
    mdiDeleteOutline,
    mdiPlus,
    mdiChevronLeft,
    mdiChevronRight,
    mdiPageFirst,
    mdiArrowURightTop,
    mdiCloseCircleOutline,
    mdiPageLast,
  },
  created() {
    for (let x = 0; x < 10; x++) {
      this.table.items.push({
        id: x + 123,
        species: 'Порода 1',
        type: 'Теленок',
        sex: 'Самец',
        stall: 'Название стойла',
        group: 'Название группы',
        status: 'На ферме',
      })
    }
  },
  methods: {
    getColor(status) {
      return 'success_bg'
    },
  },
  name: 'ListComponent',
}
</script>

<style lang="scss">
.lists label {
  font-size: var(--font-size-sm);
}
</style>
