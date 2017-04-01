import Vue from 'vue'
import Vuex from 'vuex'

import {
  ajax,
  io_base,
  io_home_list
} from '../mixin/url.js'

Vue.use(Vuex)

const state = {
  base_data: {}
}

const mutations = {
  GET_DATA(state, payload) {
    state.base_data = Object.assign({}, state.base_data, payload)
  }
}

const actions = {
  getData({commit}) {
    ajax(io_base).then(res => commit('GET_DATA', res.data))
  },
  getListBy({commit, state}, page) {
    ajax(io_home_list, { page: page }).then(res => {
      commit('GET_DATA', { list: state.base_data.list.concat(res.data.list)})
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
