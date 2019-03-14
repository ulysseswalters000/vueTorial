<template lang="pug">
  div#app
    NavBar
    router-view
</template>

<script>
import NavBar from './components/nav.vue'
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'
import listBlogs from './components/listBlogs.vue'
import updateBlog from './components/updateBlog.vue'
import login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    addBlog,
    showBlogs,
    listBlogs,
    NavBar,
    updateBlog,
    login
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
