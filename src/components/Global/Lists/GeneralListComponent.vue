<template>
  <div>
    <div class="pa-1 lists">
      <div>
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
          :headers="table.headers"
          :items="table.items"
          item-key="id"
          class="elevation-table"
          color="black"
          item-class="black"
          :hide-default-footer="table.disableFooter ? table.disableFooter : false"
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
            <div class="primary--text pt-2">{{ $t('Не найдено') }}</div>
            <div class="primary--text pt-2 pb-2">
              {{ $t('Попробуйте изменить запрос') }}
            </div>
          </template>
          <template v-slot:[`item.status`]="{ item }">
            <StatusBadge :status="item.status" />
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
  props: ['table'],
  name: 'GeneralListComponent',
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
}
</script>

<style lang="scss">
.lists label {
  font-size: var(--font-size-sm);
}
</style>
