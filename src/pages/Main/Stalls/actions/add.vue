<template>
  <div>
    <subHeader title="Добавить" goal="edit" />
    <v-card class="pa-5 mt-4">
      <v-row class="md-6">
        <v-col md="6">
          <v-text-field outlined label="Ферма" hide-details="auto"> </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-text-field outlined label="Наименование" hide-details="auto"> </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-text-field outlined label="Тип" hide-details="auto"> </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-text-field outlined label="Количество голов" hide-details="auto">
          </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-text-field outlined label="Площадь" hide-details="auto"> </v-text-field>
        </v-col>
        <hr />
        <v-col md="6">
          <v-text-field outlined label="Группа" hide-details="auto"> </v-text-field>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
