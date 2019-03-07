<template>
  <div>
    <Header :title='title' @changeTitle='updateTitle($event)' />
    <Ninja :ninjas='ninjas' />
    <Footer :title='title' @parentTitle='fromParentTitle($event)'/>
  </div>
</template>

<script>
import Ninja from './Ninja.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Test',
  components: {
    Ninja,
    Header,
    Footer
  },
  data () {
    return {
      ninjas: [
        {name: 'Ryu', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardy', show: false},
        {name: 'Hitoshi', specialty: 'Click Events', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
        {name: 'Yoshi', specialty: 'Data Diggin', show: false}
      ],
      title: 'Vue Ninjas'
    }
  },
  methods: {
    updateTitle (updatedTitle) {
      this.title = updatedTitle;
    },
    fromParentTitle (data) {
      this.title = data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
