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

</template>

<script>
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
      submitted: false
    }
  },
  methods: {
    post () {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1,
        })
        .then( data => {
          console.log(data);
          this.submitted = true;
        });
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
