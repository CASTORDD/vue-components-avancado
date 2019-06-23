<template>
  <div id="app" class="container">
    <h1>Components Dinâmicos</h1>
    <button @click="componentSelecionado = 'Home'">Home</button>
    <button @click="componentSelecionado = 'PostsLista'">Posts</button>
    <button @click="componentSelecionado = 'Sobre'">Sobre</button>

    <keep-alive max="2">
      <component 
        :is="componentSelecionado"
        v-bind="propsAtuais">
      </component>
    </keep-alive>

  </div>
</template>

<script>
import Home from './components/Home'
import Sobre from './components/Sobre'
import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    Home,
    PostsLista,
    Sobre
  },
  data(){
    return {
      componentSelecionado: 'Home',
      posts: [
        { id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes no vue', autor: 'Carlos Perez'},
        { id: 2, titulo: 'Distribuindo conteudo com slots', conteudo: 'Slots podem ser usados como repositorios de codigo HTML', autor: 'Dolores Faia'}
      ]
    }
  },
  computed: {
    propsAtuais(){
      return this.componentSelecionado === 'PostsLista'
        ? { posts: this.posts}
        : {}
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

