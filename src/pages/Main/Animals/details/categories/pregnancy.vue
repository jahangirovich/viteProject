<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      :single-expand="singleExpand"
      :expanded.sync="expanded"
      item-key="id"
      hide-default-footer
      show-expand
      class="elevation-1"
    >
      <template v-slot:expanded-item="{ item }">
        <td class="bg2" colspan="1"></td>
        <td colspan="1">
          <table>
            <tr v-for="(obj, i) in item.expandedItems" :key="i">
              <td
                colspan="1"
                :class="i == item.expandedItems.length - 1 ? 'disableBorder ' : ''"
              >
                <v-card
                  elevation="0"
                  class="pl-4 py-2 gray_secondary--text"
                  height="60px"
                  color="transparent"
                >
                  {{ obj.type }}
                </v-card>
              </td>
            </tr>
          </table>
        </td>
        <td colspan="5">
          <table>
            <tr v-for="(obj, i) in item.expandedItems" :key="i">
              <td
                colspan="1"
                :class="i == item.expandedItems.length - 1 ? 'disableBorder ' : ''"
              >
                <v-card
                  elevation="0"
                  class="pl-4 py-2 primary--text"
                  height="60px"
                  color="transparent"
                >
                  {{ obj.value }}
                </v-card>
              </td>
            </tr>
          </table>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: [],
      singleExpand: false,
      headers: [
        { text: '', value: 'data-table-expand' },
        {
          text: 'Дата проверки',
          align: 'start',
          value: 'check_date',
        },
        {
          text: 'Метод',
          align: 'start',
          sortable: false,
          value: 'method',
        },
        { text: 'Срок, мес', value: 'time' },
        { text: 'Пол плода', value: 'peace' },
        { text: 'Дата отела', value: 'department_date' },
        { text: 'Статус', value: 'status' },
      ],
      items: [],
    }
  },
  created() {
    for (let x = 0; x < 10; x++) {
      this.items.push({
        id: x,
        check_date: '07.11.2020',
        method: '—',
        time: '2',
        peace: 'Самка',
        department_date: '07.11.2020',
        status: 'Статус 1',
        expandedItems: [
          {
            type: 'Проверяющий',
            value: 'Фамилия Имя',
          },
          {
            type: 'Заметка',
            value:
              'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения модели развития',
          },
        ],
      })
    }
  },
}
</script>
