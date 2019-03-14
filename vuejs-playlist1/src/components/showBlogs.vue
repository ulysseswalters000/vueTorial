<template lang="pug">
  div(id="show-blogs")
    h1 All Blog Articles
    input(type="text" v-model="search" placeholder="search blogs")
    div(v-for="(blog, index) in filteredBlogs" class='single-blog')
      //- Had to use older js syntax here
      router-link(:to="'/blog/' + id[index]")
        h2 {{ blog.title }}
      article {{ blog.content }}
      p Affiliations:
      div(v-for="category in blog.categories")
        p {{ category }}

</template>
<script>
import { db } from '../main'
export default {
  data () {
    return {
      id: [],
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
    db.collection('blog-posts').get()
      .then( snapshot => {
        snapshot.forEach( doc => {
          this.id.push(doc.id)
          this.blogs.push(doc.data());
        })
      })
      .catch( error => {
        console.log(`Failed to get documents: ${error}`);
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
