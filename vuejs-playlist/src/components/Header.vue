<template>
  <div>
    <header>
      <h1 @click='changeTitle'>{{ title }}</h1>
      <button @click='titleBack'>Turn Title Back</button>
    </header>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  name: 'header',
  props: {
    title: {
      type: String,
      required: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    changeTitle () {
      // return this.$emit('changeTitle', 'Vue Wizards');
      this.title = 'Vue Wizards';
      bus.$emit('titleChanged', 'Vue Wizards');
    },
    titleBack () {
      this.title = 'Vue Ninjas';
      bus.$emit('backTitle', 'Vue Ninjas');
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
