<template lang='pug'>
  div#add-blog
    h2 Add a New Blog Post
    form(v-if="!submitted")
      label Blog Title
      input(type='text' v-model.lazy="blog.title" required)
      label Blog Content
      textarea(v-model.lazy="blog.content")
    div(v-if="submitted")
      h3 Thanks for adding your post!
    div#preview
      h3 Preview blog
      p Blog Title: {{ blog.title }}
      p Blog Content:
      p {{ blog.content }}
      p Blog Categories:
      ul
        li(v-for="category in blog.categories") {{ category }}
      p Author:
      p {{ blog.author }}
    div#checkboxes
      label Ninjas
      input(type='checkbox' value='ninjas' v-model='blog.categories')
      label Wizards
      input(type='checkbox' value='wizards' v-model='blog.categories')
      label Mario
      input(type='checkbox' value='mario' v-model='blog.categories')
      label Cheese
      input(type='checkbox' value='cheese' v-model='blog.categories')
    label Author:
    select(v-model="blog.author")
      option(v-for='author in authors') {{ author }}
    button(@click.prevent='post') Add Blog
    p(v-if="errorMsg") {{ errorMsg }}

</template>

<script>
import { db } from '../main'
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: [
        'Andrew Walters',
        'Jordan Leonard',
        'Daniel Attaway'
      ],
      submitted: false,
      errorMsg: ''
    }
  },
  methods: {
    // method to call
    post () {
      // adds collection blog-post, then adds the blog object defined above
      db.collection('blog-posts').add(this.blog)
        // then it takes the document reference
        .then( docRef => {
          // changes sumitted state to change display on submit
          this.submitted = true;
          // logs document ID to the console
          console.log(`Document written with ID: ${docRef.id}`);
        })
        // if error,
        .catch( error => {
          // log the error
          console.log(`Error adding document: ${error}`);
        })
    }
  }
}
</script>

<style>
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>
