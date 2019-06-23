<template>
  <div class="post">
    <slot>
      <div class="post-cabecalho">
        <h2>{{ post.titulo }}</h2>
      </div>
      <div class="post-conteudo">
        <p>{{ post.conteudo }}</p>
      </div>
      <div class="post-rodape">
        <small>{{ post.autor}}</small>
        <a href="" class="link">Ler mais...</a>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      tyep: Object,
      required: true
    }
  }
}
</script>


<style lang="scss" scoped>
  .post {
    margin: 15px auto;

    &-cabecalho {
      padding: 5px 12px;
      background-color: #eee;
    }
    &-conteudo {
      font-size: 16px;
    }
    &-rodape {
      font-style: italic;
    }
    .link {
      float: right;
    }

    .paragrafo {
      color: green;
    }
  }
</style>



