/* eslint-disable no-unused-vars */
import Vue, { VNode } from 'vue'
import { ComponentOptions } from 'vue/types/options'
import { ExtendedVue } from 'vue/types/vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface VueConstructor<V extends Vue = Vue> {
    extend(
      options?: ComponentOptions<V & { icons: Record<string, unknown> }>
      // eslint-disable-next-line @typescript-eslint/ban-types
    ): ExtendedVue<V, {}, {}, {}, {}>
  }
}

declare global {
  interface Window {
    Protocol: any
  }
  interface ImportMeta {
    env: Record<string, unknown>
    globEager<T = unknown>(globPath: string): Record<string, T>
  }
}
