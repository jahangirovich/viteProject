<template>
  <div>
    <ListComponent :table="table" :filterItems="filterItems" />
  </div>
</template>

<script lang="ts">
import {
  mdiArrowURightTop,
  mdiCalendarRangeOutline,
  mdiDeleteOutline,
  mdiPencil,
} from '@mdi/js'
import Vue from 'vue'
type AnimalArray = {
  id: number
  species: string
  type: string
  sex: string
  stall: string
  group: string
  status: string
}

export default Vue.extend({
  data() {
    return {
      filterItems: {
        radios: 'All',
        filterDropDownItems: ['first', 'second'],
        showFilter: false,
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
        selectedItems: [],
        selectedFilters: [[], [], [], []],
      },
      table: {
        actionMenu: [
          { title: 'Расписание', icon: mdiCalendarRangeOutline },
          { title: 'Редактировать', icon: mdiPencil },
          { title: 'Переместить', icon: mdiArrowURightTop },
          { title: 'Удалить', icon: mdiDeleteOutline, isDelete: true },
        ],
        link: {
          href: '/home/animals/details',
          name: 'id',
          add: '/home/animals/addition/profile',
        },
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: true,
            value: 'id',
          },
          { text: 'Порода', value: 'species' },
          { text: 'Тип', value: 'type' },
          { text: 'Пол', value: 'sex' },
          { text: 'Стойло', value: 'stall' },
          { text: 'Группа', value: 'group' },
          { text: 'Статус', value: 'status' },
          { text: '', value: 'actions', sortable: false },
        ],
        items: [] as AnimalArray[],
        selectedItemsActions: [
          { title: 'Переместить', icon: mdiArrowURightTop, color: 'accent' },
          { title: 'Удалить', icon: mdiDeleteOutline, isDelete: true, color: 'error' },
        ],
      },
    }
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
})
</script>
