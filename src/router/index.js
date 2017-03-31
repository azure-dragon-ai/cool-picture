import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloFromVux'
import Home from '@/components/Home'
import Works from '@/components/Works'
import Articles from '@/components/Articles'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '*',
      component: Home
    }
  ]
})
