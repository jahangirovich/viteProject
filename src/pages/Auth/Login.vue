<template>
  <v-form class="mx-4 my-6" method="post" @submit="(e) => auth.login(e, formData)">
    <div class="mb-6">
      <v-text-field
        color="accent"
        label="Email"
        v-model="formData.email"
        type="email"
        outlined
        hide-details="auto"
      />
    </div>
    <div class="mb-5">
      <v-text-field
        color="accent"
        class="border-gray_secondary"
        v-model="formData.password"
        :append-icon="show1 ? mdiEye : mdiEyeOff"
        :type="show1 ? 'text' : 'password'"
        name="password"
        hide-details="auto"
        label="Пароль"
        outlined
        @click:append="show1 = !show1"
      ></v-text-field>
    </div>
    <v-btn
      type="submit"
      class="normal-case font-600 white--text rounded-lg"
      large
      color="accent"
      depressed
      width="100%"
    >
      Войти
    </v-btn>
    <div class="text-decoration-underline text--accent mt-6 text-center">
      <router-link to="/" class="accent--text text-body-2"> Забыли пароль? </router-link>
    </div>
  </v-form>
</template>
<script lang="ts">
import { mdiEyeOff, mdiEye } from '@mdi/js'
import { inject, reactive } from '@vue/composition-api'

export default {
  setup() {
    const auth = inject('auth')
    const formData = reactive({
      email: '',
      password: '',
    })
    return {
      auth,
      formData,
    }
  },
  data() {
    return {
      show1: false,
      mdiEyeOff,
      mdiEye,
    }
  },
}
</script>
