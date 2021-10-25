<template>
  <div>
    <Button @click.native="back"> go back </Button>
    dynamic route
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useRouter } from 'vue2-helpers/vue-router'
export default defineComponent({
  setup() {
    const route = useRouter()
    const back = () => route.back()
    return { back }
  },
})
</script>
