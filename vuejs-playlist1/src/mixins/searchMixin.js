export default {
  computed: {
    searchMixin()  {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
}
