import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import Routes from './router/index'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(Router);

const router = new Router({
  routes: Routes,
  mode: 'history'
});

// Custom directives


Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
});

// filters

Vue.filter('sub-string', value => {
  return `${value.slice(0,100)}...`;
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
