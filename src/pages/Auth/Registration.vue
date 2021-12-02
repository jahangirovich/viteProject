/* eslint-disable prettier/prettier */
<template>
  <v-form class="mx-4 my-6" method="post" @submit="authSignUp">
    <div class="mb-4">
      <v-text-field
        color="accent"
        label="Имя*"
        type="text"
        outlined
        v-model="formFields.first_name"
        hide-details="auto"
      />
    </div>
    <div class="mb-4">
      <v-text-field
        color="accent"
        label="Фамилия*"
        type="text"
        v-model="formFields.last_name"
        outlined
        hide-details="auto"
      />
    </div>
    <div class="mb-4">
      <v-text-field
        color="accent"
        label="Почта*"
        type="email"
        v-model="formFields.email"
        :append-icon="mdiInformation"
        outlined
        @click:append="showInfo = !showInfo"
        hide-details="auto"
      >
        <div class="text_wrapper" slot="prepend" v-if="showInfo">
          <v-card elevation="0" left class="ma-2 hintCard pa-2" slot="prepend">
            <div>
              <span class="text-body-2 d-absolute">
                Ваш электронный адрес будет<br />
                использоваться как логин <br />для авторизации в системе
              </span>
            </div>
          </v-card>
          <div class="arrow_wrapper">
            <div class="arrow-right"></div>
          </div>
        </div>
      </v-text-field>
    </div>
    <div class="mb-4">
      <v-text-field
        :append-icon="show1 ? mdiEye : mdiEyeOff"
        :type="show1 ? 'text' : 'password'"
        v-model="formFields.password"
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
        v-model="formFields.phone_number"
        outlined
        hide-details="auto"
        :append-icon="mdiInformation"
      />
    </div>
    <div class="mb-4">
      <v-text-field
        label="Организация"
        v-model="formFields.organization_name"
        type="text"
        outlined
        hide-details="auto"
      />
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
import { defineComponent, inject, reactive } from '@vue/composition-api'
import { mdiEyeOff, mdiEye, mdiInformation } from '@mdi/js'

export default defineComponent({
  components: {},
  setup() {
    const signUp = inject('signUp')
    const formFields = reactive({
      first_name: '',
      last_name: '',
      phone_number: '',
      organization_name: '',
      email: '',
      password: '',
    })

    const authSignUp = (e) => {
      e.preventDefault()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      signUp(formFields)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return {
      authSignUp,
      formFields,
    }
  },
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
  border-radius: 8px !important;
  z-index: 1001;
  background-color: var(--color-bg2);
  border: 1px solid var(--color-accent);
  opacity: 1 !important;
}
.arrow_wrapper {
  position: absolute;
  right: 9.9%;
  top: 50%;
  z-index: 1001;
  transform: translateY(-50%);
  .arrow-right {
    width: 0;
    position: relative;
    height: 0;
    border-top: 9px solid transparent;
    border-bottom: 9px solid transparent;
    border-left: 9px solid var(--color-accent);
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid var(--color-bg2);
      position: absolute;
      top: -8px;
      right: 1.5px;
    }
  }
}
</style>
