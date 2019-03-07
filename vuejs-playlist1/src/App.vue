<template lang="pug">
  div#app
    addBlog
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  name: 'app',
  components: {
    addBlog
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
