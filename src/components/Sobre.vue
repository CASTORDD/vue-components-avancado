<template>
  <div>
    <h2>Sobre</h2>
    <p v-if="autor">Author: {{ autor }}</p>
    <input type="text" v-model="autor">
  </div>
</template>

<script>
export default {
  data(){
    return {
      autor: ''
    }
  },
  created(){
    console.log('created!')
  },
  destroyed(){
    console.log('Destroyed!')
  },
  activated(){
    console.log('Activated!')
  },
  deactivated(){
    console.log('Deactivated!')
  }
}
</script>

