<template>
  <ListComponent :table="table" :filterItems="filterItems" />
</template>
<script lang="ts">
import {
  mdiArchiveArrowDown,
  mdiArrowURightTop,
  mdiDeleteOutline,
  mdiPencil,
} from '@mdi/js'
import Vue from 'vue'
type AnimalArray = {
  id: number
  name: string
  type: string
  heads: number
  size: string
  group: string
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
        link: { href: `/home/stalls/details/`, name: 'name' },
        actionMenu: [
          { title: 'Редактировать', icon: mdiPencil },
          { title: 'В архив', icon: mdiArchiveArrowDown },
        ],
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: true,
            value: 'id',
          },
          { text: 'Наименование', value: 'name' },
          { text: 'Тип', value: 'type' },
          { text: 'Голов', value: 'heads' },
          { text: 'Площадь (м²)', value: 'size' },
          { text: 'Группа', value: 'group' },
          { text: '', value: 'actions', sortable: false },
        ],
        items: [] as AnimalArray[],
        selectedItemsActions: [
          { title: 'В архив', icon: mdiArchiveArrowDown, color: 'accent' },
        ],
      },
    }
  },
  created() {
    for (let x = 0; x < 10; x++) {
      this.table.items.push({
        id: x + 123,
        name: 'Стойло 1',
        type: 'Теленок',
        heads: 45,
        group: 'Название группы',
        size: 'На ферме',
      })
    }
  },
})
</script>
