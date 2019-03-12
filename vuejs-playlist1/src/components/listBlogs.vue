<template lang="pug">
  div#list-blogs
    div.header
      h1 List Blog Titles
      input(type="text" v-model="search" placeholder="search blog title")
    h2(v-for="blog in searchMixin" class="single-blog") {{ blog.title }}
</template>

<script>
import searchMixin from '../mixins/searchMixin.js'
export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then( response => {
        this.blogs = response.body.slice(0,10)
      })
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
#list-blogs {

}

.header {
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  justify-content: space-between;
}

input {
  display: inline-block;
  max-width: 50%;
  height: 2px;
  align-items: flex-end;

}

h1 {
  max-width: 800px;
}
.single-blog {
  max-width: 800px;
  margin: 20px auto;
}
</style>
