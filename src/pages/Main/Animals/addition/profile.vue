<template>
  <div class="d-flex">
    <v-card class="flex-grow-0 mr-2 pa-5">
      <v-btn depressed height="auto" class="pa-0" @click="changeImage">
        <!-- <v-img
          :src="require('@/assets/main/other/add_animal_placeholder.png')"
          width="232px"
        /> -->
        <v-file-input
          v-model="image"
          @change="preview_image"
          ref="input_file"
          style="display: none"
        />
        <v-img
          :src="
            url == null ? require('@/assets/main/other/add_animal_placeholder.png') : url
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
    </v-card>
    <div class="flex-grow-1 ml-2">
      <v-card class="pa-5 mb-4">
        <v-container>
          <v-row>
            <v-col md="7">
              <v-text-field outlined label="ID" hide-details="auto"></v-text-field>
            </v-col>
            <v-col md="7">
              <v-text-field
                outlined
                label="Локальный ID"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col md="7">
              <v-text-field
                outlined
                label="Номер тавро"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col md="7">
              <v-text-field outlined label="Имя" hide-details="auto"></v-text-field>
            </v-col>
            <v-col md="7">
              <v-autocomplete outlined label="Пол" hide-details="auto"></v-autocomplete>
            </v-col>
            <v-col md="7">
              <v-autocomplete
                outlined
                label="Порода"
                hide-details="auto"
              ></v-autocomplete>
            </v-col>
            <v-col md="7">
              <v-autocomplete
                outlined
                label="Дата рождения"
                hide-details="auto"
              ></v-autocomplete>
            </v-col>
            <v-col md="7">
              <v-autocomplete
                outlined
                label="Происхождение"
                hide-details="auto"
              ></v-autocomplete>
            </v-col>
            <v-col md="7">
              <v-autocomplete outlined label="Тип" hide-details="auto"></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="pa-5 mb-4">
        <v-container>
          <v-row>
            <v-col md="7">
              <v-autocomplete outlined label="Мать" hide-details="auto"></v-autocomplete>
            </v-col>
            <v-col md="7">
              <v-autocomplete outlined label="Отец" hide-details="auto"></v-autocomplete>
            </v-col>
            <v-col md="7">
              <v-autocomplete
                outlined
                label="Отлучение от груди"
                hide-details="auto"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-card class="pa-5 mb-4">
        <v-container>
          <v-row>
            <v-col md="7">
              <v-autocomplete
                outlined
                label="Условное прибытие"
                hide-details="auto"
              ></v-autocomplete>
            </v-col>
            <v-col md="7">
              <v-autocomplete
                outlined
                label="Дата прибытия"
                hide-details="auto"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiPencil, mdiDeleteOutline } from '@mdi/js'
export default Vue.extend({
  data() {
    return {
      url: null as any,
      image: null,
      refs: this.$refs,
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
