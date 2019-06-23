<template>
  <div id="app" class="container">
    <h1>Vue components</h1>
    <Post>
      <h2 slot="cabecalho">Components no Vue</h2>
      <template>
        <p class="paragrafo">Components são uma das peças mais importantes no Vue</p>
        <span>...</span>
      </template>
      <small slot="rodape">por {{ autor }}</small>
    </Post>
  </div>
</template>

<script>
import Post from './components/Post.vue'

export default {
  components: {
    Post
  },
  data(){
    return {
      autor: 'Castor Dioscurois'
    }
  }
}
</script>
<style lang="scss" scoped>
  .container {
    max-width: 960px;
    margin: auto;
    padding:0 18px;
  }

  
</style>

