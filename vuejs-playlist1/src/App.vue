<template lang="pug">
  div#app
    showBlogs
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
  name: 'app',
  components: {
    addBlog,
    showBlogs
  },
  data () {
    return {
      component: 'FormOne'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
