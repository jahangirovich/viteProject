<template>
  <v-form class="mx-4 my-6">
    <div class="mb-6">
      <v-text-field
        color="accent"
        label="Email"
        type="email"
        outlined
        hide-details="auto"
      />
    </div>
    <div class="mb-5">
      <v-text-field
        v-model="password"
        color="accent"
        class="border-gray_secondary"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="password"
        hide-details="auto"
        label="Password"
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
      <router-link to="/" class="accent--text text-xs"> Забыли пароль? </router-link>
    </div>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {},
  data() {
    return {
      show1: false,
      password: '',
    }
  },
})
</script>
