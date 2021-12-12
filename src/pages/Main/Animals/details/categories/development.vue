<template>
  <div>
    <GeneralListComponent :table="table" />
  </div>
</template>
<script>
import { development } from '.'
import { ref } from '@vue/composition-api'
export default {
  setup() {
    const dev = development()
    const table = ref(dev.table())

    return {
      table,
    }
  },
}
</script>
