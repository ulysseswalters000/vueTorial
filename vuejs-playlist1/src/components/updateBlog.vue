<template lang="pug">
  div#update-blog
    h1 {{ this.id }}
    h2 Title:
    input(type="text" v-model="blog.title" :placeholder="blog.title")
    h2 Content:
    input(type="text" v-model="blog.content" :placeholder="blog.content")
    h2 Author:
    select(:value="blog.author" v-model="blog.author")
      option(v-for="author in authors") {{ author }}
    h2 Categories:
    div#checkboxes
      label Ninjas
      input(type='checkbox' value='ninjas' v-model='blog.categories')
      label Wizards
      input(type='checkbox' value='wizards' v-model='blog.categories')
      label Mario
      input(type='checkbox' value='mario' v-model='blog.categories')
      label Cheese
      input(type='checkbox' value='cheese' v-model='blog.categories')
    button(@click.prevent='updateBlog') Update Blog
    button(@click="deleteBlog") Delete Blog
</template>

<script>
import { db } from '../main'
export default {
  data () {
    return {
      id: this.$route.params.id,
      blog: {},
      authors: [
        'Andrew Walters',
        'Jordan Leonard',
        'Daniel Attaway'
      ]
    }
  },
  methods: {
    deleteBlog () {
      db.collection('blog-posts').doc(this.id).delete();
      this.$router.push(`/`);
    },
    updateBlog () {
      db.collection('blog-posts').doc(this.id).set(this.blog)
      .then( () => {
        this.$router.push('/blog/' + this.id);
      })
      .catch( error => {
        console.log('There was an error:', error);
      })
    }
  },
  created () {
    db.collection('blog-posts').doc(this.id).get()
      .then( response => {
        this.blog = response.data();
      })
  }
}
</script>

<style>
#update-blog {
  max-width: 800px;
  margin: 0 auto;
}
</style>
