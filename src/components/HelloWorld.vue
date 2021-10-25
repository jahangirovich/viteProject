<script>
import { ref } from '@vue/composition-api'
  export default{
    setup(){
      const res = ref("hi")
      return {
        res
      }
    },
    data(){
      return {
        msg: "sas"
      }
    }
  }
</script>

<template>
<div>
   <h1>{{ msg }}</h1>
   <span>{{ res}} </span>
   <v-btn
      elevation="2"
    >Say hi</v-btn>
</div>
</template>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
