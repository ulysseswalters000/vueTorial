Vue.component('greeting',{
  template: '<p>Hello {{name}}<button @click="changeName()">Change Name</button></p>',
  data: function(){
    return {
      name: 'Yoshi'
    }
  },
  methods: {
    changeName: function(){
      return this.name = 'Mario';
    }
  }
});


new Vue({
  el: '#vue-app-one',
  data: {

  },
  methods: {

  },
  computed: {

  }
});

new Vue({
  el: '#vue-app-two',
  data: {

  },
  methods: {

  },
  computed: {

  }
});
