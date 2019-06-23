<template>
  <div class="post">
    <div class="post-cabecalho">
      <slot name="cabecalho"></slot>
    </div>
    <div class="post-conteudo">
      <slot ></slot>
    </div>
    <div class="post-rodape">
      <slot name="rodape"></slot>
      <a href="" class="link">
        <slot name="botao">Ler mais</slot>
      </a>
    </div>
  </div>
</template>

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



