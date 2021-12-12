<template>
  <div>
    <GeneralListComponent :table="table" />
  </div>
</template>
<script>
import { reproduction } from '.'
export default {
  name: 'AnimalProfileReproduction',
  setup(props, { root }) {
    const table = reproduction().table()
    return { table }
  },
}
</script>
