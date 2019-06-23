<template>
  <div id="app" class="container">
    <h1>Forma Padrão</h1>
    <PostsLista :posts="posts"/>
    <hr>
    <h1>Slots com scopo</h1>
    <PostsLista :posts="posts">
      <template slot-scope="{ meuPost }">
        <h2>{{ meuPost.titulo }}</h2>
        <p>{{ meuPost.conteudo }}</p>
        <small>{{ meuPost.autor }}</small>
      </template>
    </PostsLista>
  </div>
</template>

<script>
import PostsLista from './components/PostsLista.vue'

export default {
  components: {
    PostsLista
  },
  data(){
    return {
      posts: [
        { id: 1, titulo: 'Components no Vue', conteudo: 'Components são uma das peças mais importantes no vue', autor: 'Carlos Perez'},
        { id: 2, titulo: 'Distribuindo conteudo com slots', conteudo: 'Slots podem ser usados como repositorios de codigo HTML', autor: 'Dolores Faia'}
      ]
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

