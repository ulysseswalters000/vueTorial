import Router from 'vue-router'


import showBlogs from '../components/showBlogs.vue'
import addBlog from '../components/addBlog.vue'
import singleBlog from '../components/singleBlog.vue'
import updateBlog from '../components/updateBlog.vue'
import login from '../components/Login.vue'
import { auth } from '../main'

// to implement router guards, we store the router in a variable
let router = new Router({
  mode: 'history',
  routes: [
            {
              path: '/',
              name: 'home',
              component: showBlogs
            },
            {
              path: '/login',
              name: 'login',
              component: login
            },
            {
              path: '/add',
              name: 'addBlog',
              component: addBlog,
              meta: {
                requiresAuth: true
              }
            },
            {
              path: '/blog/:id',
              name: 'singleBlog',
              component: singleBlog
            },
            {
              path: '/updateBlog/:id',
              name: 'updateBlog',
              component: updateBlog,
              meta: {
                requiresAuth: true
              }
            }
          ]
});

// NAV GUARDS

// Call the beforeEach lifecycle on each item in router array
router.beforeEach((to, from, next) => {

  // Checks for requiresAuth Guard
  if(to.matched.some(record => record.meta.requiresAuth)) {

    // Check if not logged in
    if(!auth.currentUser) {

      // if not logged in, and making request to a required auth page
      // redirect to the login page
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });

      // otherwise
    } else {

      // Proceed to Route
      next();
    }

    // else if the request requires guest permissions
  } else if(to.matched.some(record => record.meta.requiresGuest)) {

    // Check if Logged in
    if(auth.currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

// Exports the router var after all code has run.
export default router;
