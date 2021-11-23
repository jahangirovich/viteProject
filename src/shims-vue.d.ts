import { ComponentOptions } from 'vue/types/options'
import { ExtendedVue, Vue } from 'vue/types/vue'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '@vue/runtime-dom' {
  export * from '@vue/runtime-dom/dist/runtime-dom'
  export { defineComponent, PropType } from '@vue/composition-api'
}
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    icons?: Record<string, string>
  }
}
