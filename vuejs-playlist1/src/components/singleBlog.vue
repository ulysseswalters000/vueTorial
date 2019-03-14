<template lang="pug">
  div#single-blog
    h1 {{ blog.title }}
    article {{ blog.content }}
    router-link(:to="'/updateBlog/' + this.id")
      button update blog
</template>

<script>
import { db } from '../main'
  export default {
    data () {
      return {
        // sets the value of id to whatever is typed in the route :id
        id: this.$route.params.id,
        // initializes empty blog to receive data from http request
        blog: {}
      }
    },
    methods: {
      created () {
        db.collection('blog-posts').doc(this.id).get()
          .then( response => {
            this.blog = response.data();
          })
      }
    }
  }
</script>

<style>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
