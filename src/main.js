// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill()
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'

import './style/font/iconfont.css'

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  data: {
    // 所有组件之间的事件通信
    // this.$root.hub.$on / this.$root.hub.$emit
    hub: new Vue()
  },
  render: h => h(App)
}).$mount('#app-box')

store.dispatch('getData')
