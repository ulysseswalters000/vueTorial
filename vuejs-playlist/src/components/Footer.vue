<template>
  <div>
    <footer>
      <p>{{ copyright }} {{ title }}</p>
      <button @click='fromParent'>From Parent</button>
    </footer>
  </div>
</template>

<script>
import { bus } from '../main'
export default {
  name: 'footer',
  props: {
    title: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      copyright: 'Copyright 2019'

    }
  },
  methods: {
    fromParent () {
      this.$emit('parentTitle', 'From Parent');
    }
  },
  created () {
    bus.$on('backTitle', (data) => {
      this.title = data;
    })
    bus.$on('titleChanged', (data) => {
      this.title = data;
    });
  }
}
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}

</style>
