let one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'One'
  },
  methods: {

  },
  computed: {
    greet: function(){
      return 'Hello from one'
    }
  }
});
let two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Two'
  },
  methods: {
    changeTitle: () => {
      one.title = "changed from two"
    }
  },
  computed: {
    greet: () => {
      return 'Hello from two'
    }
  }
});

two.title = "changed from outside instance";
