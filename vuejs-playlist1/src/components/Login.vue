<template lang="pug">
  div
    h3 Login
    div
      label(for="email") Email
      input(type="text" id="email" v-model="email")
    div
      label(for="password") Password
      input(type="password" id="password" v-model="password")
    button(@click="login") Login
    h1(v-if="error") {{ errorMsg }}

</template>

<script>
import { auth } from '../main'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: false,
      errorMsg: ''
    }
  },
  methods: {
    login () {
      auth.signInWithEmailAndPassword(this.email, this.password)
        .then( user => {
          alert(`You are logged in as ${this.email}`)
          this.$router.push({path: "/"})
        })
        .catch( err => {
          this.error = true;
          this.errorMsg = err.message;
        })
    }
  }
}
</script>

<style>

</style>
