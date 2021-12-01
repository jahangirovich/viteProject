<template>
  <div>
    <subHeader title="Настройки" />
    <div class="content mt-5 px-1">
      <v-row>
        <v-col class="px-2">
          <v-card class="px-5 py-4" rounded="lg">
            <div class="d-flex align-center">
              <div>
                <v-img
                  :src="require('@/assets/main/settings/profile_placeholder.svg')"
                  width="96px"
                />
              </div>
              <div class="ml-5">
                <h6 class="text-h6 font-weight-bold">
                  {{ $t('ТОО «Крестьяское хозяйство»') }}
                </h6>
                <AnimalStatus :status="'Активная'" />
              </div>
            </div>
            <v-divider class="my-4"></v-divider>
            <div>
              <div class="mt-3">
                <LabelWithInfo type="ID" value="Теленок" />
              </div>
              <div class="mt-3">
                <LabelWithInfo type="Логин владельца" value="user_user1234@gmail.com" />
              </div>
              <div class="mt-3">
                <LabelWithInfo type="ИИН/БИН" value="123456789012" />
              </div>
              <div class="mt-3">
                <LabelWithInfo
                  type="Юридический адрес"
                  value="Алматинская обл, г. Алматы, ул. Такая-то, ст.76/4"
                />
              </div>
              <div class="mt-3">
                <LabelWithInfo
                  type="Фактический адрес"
                  value="Алматинская обл, г. Алматы, ул. Такая-то, ст.76/4"
                />
              </div>
            </div>
            <v-divider class="my-4"></v-divider>
            <h6 class="text-h6 font-weight-bold">{{ $t('Реквизиты') }}</h6>
            <PropertyComponent
              :values="[
                { type: 'Банк', value: 'АО «Банк ЦентрКредит»' },
                { type: 'КБЕ', value: '19' },
                { type: 'БИК', value: 'KCJBKZKX' },
                { type: 'IBAN', value: '1234567890' },
                { type: 'Валюта счета', value: 'KZT' },
              ]"
            />
            <div class="text-center">
              <v-btn
                depressed
                small
                class="text-none accent--text mx-0"
                color="transparent"
              >
                <v-icon class="mr-2">
                  {{ mdiPencil }}
                </v-icon>
                {{ $t('Редактировать') }}
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col class="px-2">
          <v-card class="px-5 pt-6 pb-4" rounded="lg">
            <div class="d-flex justify-space-between akign-center">
              <h5 class="text-h6 font-weight-bold">Участки</h5>
              <v-btn
                depressed
                class="accent--text white"
                @click="$router.push('/home/settings/area/add')"
              >
                <v-icon> {{ mdiPlus }} </v-icon>
                <span>{{ $t('Добавить') }}</span>
              </v-btn>
            </div>
            <v-divider class="mt-4"></v-divider>
            <div>
              <list-areas />
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiPencil, mdiPlus } from '@mdi/js'
export default Vue.extend({
  data() {
    return {
      mdiPencil,
      mdiPlus,
    }
  },
})
</script>
