<template lang="pug">
  div(v-theme:column="'narrow'" id="show-blogs")
    h1 All Blog Articles
    input(type="text" v-model="search" placeholder="search blogs")
    div(v-for="blog in filteredBlogs" class='single-blog')
      h2(v-rainbow) {{ blog.title | upperCase }}
      article {{ blog.body | subString }}

</template>

<script>

export default {
  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  computed: {
    filteredBlogs () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      });
    }
  },
  created () {
    this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then( response => {
         this.blogs = response.body.slice(0,10);
      })
  },
  filters: {
    upperCase(value){
      return value.toUpperCase();
    },
    subString(value){
      return `${value.slice(0,100)}...`
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode){
        el.style.color = `#${Math.random().toString(16).slice(2,8)}`;
      }
    }
  }
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
