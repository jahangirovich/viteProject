<template>
  <v-form class="mx-4 my-6">
    <div class="mb-4">
      <v-text-field
        color="accent"
        label="Имя*"
        type="text"
        outlined
        hide-details="auto"
      />
    </div>
    <div class="mb-4">
      <v-text-field
        color="accent"
        label="Фамилия*"
        type="text"
        outlined
        hide-details="auto"
      />
    </div>
    <div class="mb-4">
      <v-text-field
        color="accent"
        label="Почта*"
        type="email"
        :append-icon="mdiInformation"
        outlined
        @click:append="showInfo = !showInfo"
        hide-details="auto"
      >
        <v-card
          elevation="0"
          left
          class="ma-2 hintCard pa-2"
          slot="prepend"
          v-if="showInfo"
        >
          <span class="text-body-2 d-absolute">
            Ваш электронный адрес будет<br />
            использоваться как логин <br />для авторизации в системе
          </span>
        </v-card>
      </v-text-field>
    </div>
    <div class="mb-4">
      <v-text-field
        v-model="password"
        :append-icon="show1 ? mdiEye : mdiEyeOff"
        :type="show1 ? 'text' : 'password'"
        name="password"
        hide-details="auto"
        color="accent"
        label="Придумайте пароль*"
        outlined
        @click:append="show1 = !show1"
      ></v-text-field>
    </div>
    <div class="mb-4">
      <v-text-field
        label="Номер телефона"
        type="text"
        outlined
        hide-details="auto"
        :append-icon="mdiInformation"
      />
    </div>
    <div class="mb-4">
      <v-text-field label="Организация" type="text" outlined hide-details="auto" />
    </div>
    <v-btn
      type="submit"
      class="rounded-lg white--text mt-2"
      large
      color="accent"
      depressed
      width="100%"
    >
      Зарегистрироваться
    </v-btn>
    <div class="text-decoration-underline text--accent mt-6 text-center">
      <router-link to="/" class="accent--text text-body-2"
        >Есть аккаунт? Войти
      </router-link>
    </div>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mdiEyeOff, mdiEye, mdiInformation } from '@mdi/js'

export default defineComponent({
  components: {},
  data() {
    return {
      show1: false,
      password: '',
      mdiEyeOff,
      mdiEye,
      showInfo: false,
      mdiInformation,
    }
  },
})
</script>

<style scoped lang="scss">
.hintCard {
  position: absolute;
  right: 10%;
  top: -35%;
  z-index: 1001;
  background-color: rgb(239, 248, 255);
  border: 1px solid var(--color-accent);
  opacity: 1 !important;
}
</style>
