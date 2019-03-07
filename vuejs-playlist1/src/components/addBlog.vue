<template lang='pug'>
  div#add-blog
    h2 Add a New Blog Post
    form
      label Blog Title
      input(type='text' v-model.lazy="blog.title" required)
      label Blog Content
      textarea(v-model.lazy="blog.content")
    div#preview
      h3 Preview blog
      p Blog Title: {{ blog.title }}
      p Blog Content:
      p {{ blog.content }}

</template>

<script>
export default {
  data () {
    return {
      blog: {
        title: '',
        content: ''
      }
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
</style>
