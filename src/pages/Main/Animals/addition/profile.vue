<template>
  <div class="d-flex">
    <v-card class="flex-grow-0 mr-2 pa-5">
      <v-btn depressed height="auto" class="pa-0">
        <v-img :src="require('@/assets/main/other/add_animal_placeholder.png')" />
      </v-btn>
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
