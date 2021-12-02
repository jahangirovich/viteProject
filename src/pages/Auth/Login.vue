<template>
  <v-form class="mx-4 my-6">
    <div class="mb-4">
      <v-text-field
        color="accent"
        label="Email"
        type="email"
        outlined
        hide-details="auto"
      />
    </div>
    <div class="mb-6">
      <v-text-field
        v-model="password"
        color="accent"
        class="border-gray_secondary"
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
      class="normal-case login-btn white--text rounded-lg"
      large
      color="accent"
      depressed
      width="100%"
      min-height="48px"
    >
      {{ $t('login.login') }}
    </v-btn>
    <div class="text--accent mt-6 text-center">
      <router-link to="/" class="accent--text forgot-password-link"
        >{{ $t('login.forgot_password') }}
      </router-link>
    </div>
  </v-form>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mdiEyeOff, mdiEye } from '@mdi/js'
export default defineComponent({
  components: {},
  data() {
    return {
      show1: false,
      password: '',
      mdiEyeOff,
      mdiEye,
    }
  },
})
</script>
<style lang="scss" scoped>
@import '../../styles/variables';
.login-btn {
  font-size: $main-font-size;
  line-height: $secondary-line-height;
  font-weight: map-get($font-weights, 'semi-bold');
}
.forgot-password-link {
  opacity: 1;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }

  border-bottom: 1px solid map-get($theme-colors, 'accent');
  font-size: $main-font-size;
  line-height: $secondary-line-height;
  font-weight: map-get($font-weights, 'semi-bold');
}
</style>
