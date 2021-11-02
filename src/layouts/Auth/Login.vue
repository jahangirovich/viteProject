<template>
  <v-form class="mx-4 my-6">
    <div class="mb-5">
      <v-text-field label="Email" type="email" outlined hide-details="auto" />
    </div>
    <div class="mb-5">
      <v-text-field
        v-model="password"
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
      class="bg-blue rounded-lg"
      large
      color="primary"
      depressed
      width="100%"
    >
      Войти
    </v-btn>
    <div class="link mt-6 text-center">
      <router-link to="/"> Забыли пароль? </router-link>
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
