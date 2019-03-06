new Vue({
  el: '#vue-app',

  data: {
    output: 'Output'
  },
  methods: {
    changeDiv: function(){
      this.output = this.$refs.input.value
    },
    changeDivA: function(){
      this.$refs.changed.innerText = this.output
    }
  },
  computed: {

  }
});
