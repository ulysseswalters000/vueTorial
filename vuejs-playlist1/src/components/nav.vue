<template lang="pug">
  nav
    ul
      li
        router-link(:to="{name: 'home'}") Show Blog
      li(v-if="isLoggedIn")
        router-link(:to="{name: 'addBlog'}") Add Blog
      li(v-if="isLoggedIn")
        button(@click="logout") Logout
      li(v-if="!isLoggedIn")
        router-link(:to="{name: 'login'}") Login
  </header>
</template>

<script>
import{ auth } from '../main'
export default {
  name: 'NavBar',
  data () {
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created () {
    if(auth.currentUser) {
      this.isLoggedIn = true;
      this.currentUser = auth.currentUser.email;
    }
  },
  methods: {
    logout () {
      auth.signOut()
        .then( () => {
          this.isLoggedIn = false;
          this.$router.push('/login');
        })
        .catch( err => {
          console.log(err.message);
        })
    }
  },
  watch: {
    '$route'(to, from){
      if(from.name == 'login') {
        this.$router.go({
          path: '/',
          query: this.fullPath
        });

      } else {
        console.log('failed');
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}

nav {
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}

.router-link-exact-active {
  background-color: #eee;
  color: #444;
}
</style>
