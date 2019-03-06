<template>
  <div>
    <h1>{{ title }}</h1>
    <ul v-for="ninja in ninjas">
      <li> {{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'NewComp',
    data () {
      return {
        title: 'This is from NewComp',
        ninjas: ['Yoshi', 'Mario', 'Ryu']
      }
    }
  }
</script>
