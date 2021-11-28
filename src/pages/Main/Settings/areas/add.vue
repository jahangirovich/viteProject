<template>
  <div>
    <subHeader goal="edit" :title="$t('Добавить участок')" />
    <v-card class="pa-5 mt-4">
      <v-row class="md-6">
        <v-col md="6">
          <v-text-field outlined label="Назначение участка" hide-details="auto">
          </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-text-field outlined label="Кадастровый номер" hide-details="auto">
          </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-text-field outlined label="Площадь" hide-details="auto" append-icon="га">
          </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-autocomplete
            outlined
            label="Категория земель"
            hide-details="auto"
          ></v-autocomplete>
        </v-col>
        <hr />
        <v-col md="6">
          <v-textarea
            label="Целевое назначение"
            outlined
            hide-details="auto"
          ></v-textarea>
        </v-col>
        <hr />
        <v-col md="6">
          <v-autocomplete
            outlined
            label="Право пользования участком"
            hide-details="auto"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="mt-5 pa-5">
      <v-flex column>
        <v-col md="6" class="pa-0 pb-4">
          <span class="font-weight-bold">{{ $t('Период владения/аренды') }}</span>
        </v-col>
        <v-col md="6" class="pa-0 pb-4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                :label="$t('Начало')"
                :append-icon="mdiCalendar"
                readonly
                outlined
                hide-details="auto"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary"> OK </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col md="6" class="pa-0 pb-4">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                :label="$t('Окончание')"
                :append-icon="mdiCalendar"
                readonly
                outlined
                hide-details="auto"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary"> OK </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
      </v-flex>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiCalendar } from '@mdi/js'
export default Vue.extend({
  data() {
    return {
      menu: false,
      mdiCalendar,
      date: null,
    }
  },
})
</script>
