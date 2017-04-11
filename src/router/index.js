import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Works from '@/components/Works'
import WorkDetail from '@/components/WorkDetail'
import Articles from '@/components/Articles'
import ArticleDetail from '@/components/ArticleDetail'
import User from '@/components/User'
import Loading from '@/components/LoadingContent'

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
      path: '/work/:id',
      name: 'WorkDetail',
      component: WorkDetail
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '*',
      component: Home
    }
  ]
})
