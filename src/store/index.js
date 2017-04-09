import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {
  jsonp as ajax,
  $dom,
  homelist,
  showbox,
  hideloadin
} from '../mixin/util'

import {
  io_base,
  io_home_list
} from '../mixin/url'


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
    ajax(io_base).then(res => $dom(res.body)).then($ => {
      commit('GET_DATA', {
        list: homelist($),
        showbox: showbox($)
      })
      hideloadin()
    })
  },
  getListBy({ commit, state }, page) {
    ajax(io_home_list, { page: page }).then(res => $dom(res.body)).then($ => {
      commit('GET_DATA', { list: state.base_data.list.concat(homelist($))})
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
