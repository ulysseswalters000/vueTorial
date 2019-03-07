<template lang='pug'>
  <div>
    
    <h1>Please fill out our form...</h1>
    <form action="">
      <div id="form-header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls"></div>
        <slot name="form-controls"></slot>
      <div id="useful-links">
        <ul>
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2</a></li>
          <li><a href="#">Link3</a></li>
          <li><a href="#">Link4</a></li>
        </ul>
      </div>
    </form>
    <keep-alive>
      component(:is="component")
    </keep-alive>
    button(@click="component = 'FormOne'") Show Form One
    button(@click="component = 'FormTwo'") Show Form Two
  </div>
</template>

<script>
import FormOne from './FormOne.vue'
import FormTwo from './FormTwo.vue'

export default {
  name: 'FormHelper',
  components: {
    FormOne,
    FormTwo
  },
  data () {
    return {
      component: 'FormOne'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color:red;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
