<template>
  <div class="d-flex py-2">
    <v-card class="mx-3 pa-4 flex-grow-0" elevation="1">
      <div>
        <v-img :src="require('@/assets/main/other/cow.png')" width="232px" cover></v-img>
        <h4 class="text-h6 font-weight-bold mt-2">{{ $t('Кличка') }}</h4>
        <div class="mt-1">
          <AnimalStatus :status="'На ферме'" />
        </div>
        <div class="mt-3">
          <LabelWithInfo type="Тип" value="Теленок" />
        </div>
        <div class="mt-3">
          <LabelWithInfo type="Порода" value="Текст" />
        </div>
        <div class="mt-3">
          <LabelWithInfo type="Пол" value="Самка" />
        </div>
        <div class="mt-3">
          <LabelWithInfo type="Происхождение" value="Рожден на ферме" />
        </div>
        <div class="mt-3">
          <LabelWithInfo type="Дата рождения" value="17.06.2021" />
        </div>
        <div class="mt-3">
          <LabelWithInfo type="Вес" value="44 кг" />
        </div>
      </div>
    </v-card>
    <v-divider vertical></v-divider>
    <div class="mx-3 flex-grow-0">
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo type="ID" value="123456789" />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo type="Локальный ID" value="123456789" />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo type="Номер RFID" value="123456789" />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo type="Номер тавро" value="123456789" />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo
          type="Отец"
          :link="{ name: '123456789', href: 'home/animals/123456789' }"
        />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo
          type="Мать"
          :link="{ name: '123456789', href: 'home/animals/123456789' }"
        />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo type="Отъем от кормления" value="17.06.2021" />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo
          type="Группа"
          :link="{ name: 'Название группы', href: 'home/animals/123456789' }"
        />
      </v-card>
      <v-card elevation="1" width="220px" class="pa-3 mb-2">
        <LabelWithInfo
          type="Стойла"
          :link="{ name: 'Название стойла', href: 'home/animals/123456789' }"
        />
      </v-card>
    </div>
    <v-divider vertical></v-divider>
    <div class="mx-3 flex-grow-1" height="auto" elevation="1">
      <v-card>
        <h4 class="text-body-2 font-weight-bold pa-4">{{ $t('Кличка') }}</h4>
        <v-divider></v-divider>
        <div class="content pa-4">
          <div class="mb-4">
            <span>04.10.2021</span>
            <v-btn depressed class="text-none text-body-2 ml-4 rounded-lg">
              <v-avatar color="green" size="14" class="mr-3">
                <span class="white--text text-h5"></span>
              </v-avatar>
              {{ $t('Наименование события') }}
            </v-btn>
          </div>
          <div class="mb-4">
            <span>04.10.2021</span>
            <v-btn depressed class="text-none text-body-2 ml-4 rounded-lg">
              <v-avatar color="accent" size="14" class="mr-3">
                <span class="white--text text-h5"></span>
              </v-avatar>
              {{ $t('Наименование события') }}
            </v-btn>
          </div>
          <div class="mb-4">
            <span>04.10.2021</span>
            <v-btn depressed class="text-none text-body-2 ml-4 rounded-lg">
              <v-avatar color="accent" size="14" class="mr-3">
                <span class="white--text text-h5"></span>
              </v-avatar>
              {{ $t('Наименование события') }}
            </v-btn>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss">
img {
  object-fit: cover;
}
</style>
