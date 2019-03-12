<template lang="pug">
  div#single-blogs
    h1 {{ blog.title }}
    article {{ blog.body }}
</template>

<script>
  export default {
    data () {
      return {
        // sets the value of id to whatever is typed in the route :id
        id: this.$route.params.id,
        // initializes empty blog to receive data from http request
        blog: {}
      }
    },
    created () {
      // uses vue-resource for an http request
      this.$http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      // after receiving data set the response as a parameter
      .then( response => {
        // set the value of the empty blog object
        // to the responses body.
        this.blog = response.body
      });
    }
  }
</script>

<style>

</style>
