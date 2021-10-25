/// <reference types="vite/client" />

declare module '*.vue' {
  import { defineComponent } from '@vue/composition-api'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
