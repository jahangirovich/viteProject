<template>
  <v-form class="pa-0" elevation="0">
    <div class="d-flex justfy-content-center align-stretch">
      <!-- 
            @prepend icon mdi icon search
          -->
      <v-text-field
        label="ID или имя"
        hide-details="auto"
        outlined
        name="search"
        color="accent"
        dense
        class="text-body-1 rounded-lg white"
        :prepend-inner-icon="options.icons.mdiMagnify"
      >
        <!-- 
              VMenu for modal dialog for filters
            -->
        <v-menu
          offset-y
          left
          nudge-bottom="10"
          bottom
          v-model="filterItems.showFilter"
          min-width="auto"
          slot="append"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-icon class="lock-button" v-bind="attrs" v-on="on">
              {{ options.icons.mdiFilterVariant }}
            </v-icon>
          </template>
          <v-card class="rounded-lg white sortByWidth">
            <div class="d-flex px-4 py-2 justify-between align-center">
              <span class="text-h6 font-weight-bold">Фильтровать</span>
              <v-btn icon class="ml-auto" @click="filterItems.showFilter = false">
                <v-icon>{{ options.icons.mdiCloseCircleOutline }}</v-icon>
              </v-btn>
            </div>
            <v-divider></v-divider>
            <div class="mx-3">
              <div
                class="d-flex my-3 align-center cursor-pointer"
                v-for="(item, i) in filterItems.filterMenu"
                :key="i"
              >
                <v-autocomplete
                  hide-details="auto"
                  outlined
                  multiple
                  class="text-body-1"
                  :items="filterItems.filterDropDownItems"
                  :label="item.name"
                  v-model="filterItems.selectedFilters[i]"
                ></v-autocomplete>
              </div>
              <div>
                <h4 class="font-weight-bold primary--text">Пол</h4>
                <v-radio-group v-model="filterItems.radios" row class="mt-2">
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
                <v-col cols="6" class="text-right pl-4 pr-2">
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
                <v-col cols="6" class="text-left pr-4 pl-2">
                  <v-btn outlined large class="text-none font-weight-bold" width="100%">
                    Сбросить
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-menu>
      </v-text-field>
      <v-btn
        class="ml-3 accent rounded-lg"
        elevation="0"
        height="auto"
        @click="$router.push(table.link.add)"
      >
        <v-icon> {{ options.icons.mdiPlus }} </v-icon>
        <span class="text-none">Добавить</span>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'ListSearchComponent',
  props: ['options', 'tableLink', 'filterItems'],
}
</script>
