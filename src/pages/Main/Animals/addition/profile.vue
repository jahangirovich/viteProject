<template>
  <div class="d-flex">
    <v-card class="flex-grow-0">
      <div class="mr-2 pa-5">
        <v-btn depressed height="auto" class="pa-0" @click="changeImage">
          <v-file-input
            v-model="image"
            @change="preview_image"
            ref="input_file"
            style="display: none"
          />
          <v-img
            :src="
              url == null
                ? require('@/assets/main/other/add_animal_placeholder.png')
                : url
            "
          />
        </v-btn>
        <div class="btns align-center text-center" v-if="image">
          <v-divider class="mt-4 mb-2"></v-divider>
          <v-btn
            depressed
            small
            class="text-none accent--text ma-0"
            color="transparent"
            @click="changeImage"
          >
            <v-icon class="mr-2">
              {{ mdiPencil }}
            </v-icon>
            Изменить Фото
          </v-btn>
          <v-divider class="mt-2 mb-2"></v-divider>
          <v-btn
            small
            class="text-none ml-0 error--text"
            color="transparent"
            depressed
            @click="deleteImage"
          >
            <v-icon>
              {{ mdiDeleteOutline }}
            </v-icon>
            Удалить фото
          </v-btn>
          <v-divider class="mt-2 mb-4"></v-divider>
        </div>
      </div>
      <v-divider class="mt-10"></v-divider>
      <div>
        <v-btn> </v-btn>
      </div>
    </v-card>
    <div class="flex-grow-1 ml-2">
      <v-card class="pa-5 mb-4 elevation-table" elevation="0">
        <v-row>
          <v-col md="7">
            <h5 class="text-h5 font-weight-bold">{{ $t('Основные параметры') }}</h5>
          </v-col>
          <v-col md="7">
            <span class="font-weight-bold">{{ $t('Вид') }}</span>
            <v-radio-group class="mt-2" hide-details="auto">
              <v-radio class="mt-0" color="accent">
                <template v-slot:label>
                  <span class="primary--text">{{ $t('Крупный рогатый скот') }}</span>
                </template>
              </v-radio>
              <v-radio class="mt-2" color="accent">
                <template v-slot:label>
                  <span class="primary--text">{{ $t('Лошади') }}</span>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
          <v-col md="7">
            <span class="font-weight-bold">{{ $t('Пол') }}</span>
            <v-radio-group class="mt-2" hide-details="auto">
              <v-radio class="mt-0" color="accent">
                <template v-slot:label>
                  <span class="primary--text">{{ $t('Самец') }}</span>
                </template>
              </v-radio>
              <v-radio class="mt-2" color="accent">
                <template v-slot:label>
                  <span class="primary--text">{{ $t('Самка') }}</span>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
          <v-col md="7">
            <v-autocomplete
              outlined
              label="Классификация КРС*"
              hide-details="auto"
            ></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-autocomplete outlined label="Порода*" hide-details="auto"></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-autocomplete
              outlined
              label="Категория*"
              hide-details="auto"
            ></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Возраст (например: 3,7)*"
              suffix="год(а)/лет"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Текущий вес*"
              suffix="кг"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Текущий рост*"
              suffix="см"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field outlined label="Масть, цвет" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field outlined label="Собственник" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="7">
            <v-autocomplete outlined label="Рога" hide-details="auto"></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-text-field outlined label="Кличка" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field outlined label="Темперамент" hide-details="auto"></v-text-field>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="pa-5 mb-4 elevation-table" elevation="0">
        <v-row>
          <v-col md="7">
            <h5 class="text-h5 font-weight-bold">{{ $t('Статус животного') }}</h5>
          </v-col>
          <v-col md="7">
            <v-autocomplete outlined label="Статус*" hide-details="auto"></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-autocomplete
              outlined
              label="Статус наличия или отсутствия на ферме*"
              hide-details="auto"
            ></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-autocomplete
              outlined
              label="Причина выбраковки*"
              hide-details="auto"
            ></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-autocomplete
              outlined
              label="Статус племенного разведения*"
              hide-details="auto"
            ></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-autocomplete outlined label="Загон" hide-details="auto"></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-autocomplete
              outlined
              label="Текущее местоположение"
              hide-details="auto"
            ></v-autocomplete>
          </v-col>
          <v-col md="7">
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :label="$t('Начало')"
                  :append-icon="mdiCalendar"
                  readonly
                  outlined
                  hide-details="auto"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary"> Cancel </v-btn>
                <v-btn text color="primary"> OK </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="pa-5 mb-4 elevation-table" elevation="0">
        <v-row>
          <v-col md="7">
            <h5 class="text-h5 font-weight-bold">Идентификация</h5>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Номер гос. бирки*"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Номер инвентарный 1*"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Цвет бирки номера инвентарного 1"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Номер инвентарный 2"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Номер RFID бирки*"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field outlined label="Номер тавро" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field
              outlined
              label="Номер зарубежный"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field outlined label="Номер тату" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="7">
            <v-text-field outlined label="Номер стада" hide-details="auto"></v-text-field>
          </v-col>
          <v-col md="7">
            <v-row>
              <v-col md="12">
                <span class="font-weight-bold">Ветеринарный паспорт</span>
              </v-col>
              <v-col md="6">
                <v-text-field outlined label="Номер" hide-details="auto"></v-text-field>
              </v-col>
              <v-col md="6">
                <v-text-field outlined label="Дата" hide-details="auto"></v-text-field>
              </v-col>
              <v-col md="12">
                <v-textarea outlined label="Описание"></v-textarea>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiPencil, mdiDeleteOutline, mdiCalendar } from '@mdi/js'
export default Vue.extend({
  data() {
    return {
      url: null as any,
      image: null,
      refs: this.$refs,
      mdiCalendar,
      mdiPencil,
      mdiDeleteOutline,
    }
  },
  methods: {
    preview_image() {
      this.url = URL.createObjectURL(this.image)
    },
    changeImage() {
      if (this.$refs?.input_file) this.$refs.input_file['$refs'].input.click()
    },
    deleteImage() {
      this.url = null
      this.image = null
    },
  },
})
</script>
