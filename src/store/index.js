import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {
  jsonp,
  $dom,
  homelist,
  showbox
} from '../mixin/util'

import {
  io_base,
  io_home_list
} from '../mixin/url.js'


const state = {
  base_data: {}
}

const mutations = {
  GET_DATA(state, payload) {
    state.base_data = Object.assign({}, state.base_data, payload)
  }
}

const actions = {
  getData({ commit }) {
    jsonp(io_base).then(res => $dom(res.body)).then($ => {
      commit('GET_DATA', {
        list: homelist($),
        showbox: showbox($)
      })
    })
  },
  getListBy({ commit, state }, page) {
    jsonp(io_home_list, { page: page }).then(res => $dom(res.body)).then($ => {
      commit('GET_DATA', { list: state.base_data.list.concat(homelist($))})
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
