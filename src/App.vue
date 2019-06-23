<template>
  <div id="app">
    <h1>Vue components</h1>
    <Post>
      <h2>Components no Vue</h2>
      <p>Componets são uma das peças mais importantes no Vue</p>
    </Post>
  </div>
</template>

<script>
import Post from './components/Post.vue'

export default {
  components: {
    Post
  }  
}
</script>
