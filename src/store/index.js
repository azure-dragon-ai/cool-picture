import Vue from 'vue'
import Vuex from 'vuex'
import { AjaxPlugin } from 'vux'

Vue.use(Vuex)

let io_base = ''
if (process.env.NODE_ENV === 'development') {
  io_base = '/io/base'
}

const state = {
  base_data: {}
}

const mutations = {
  GET_DATA(state, payload) {
    state.base_data = payload
  }
}

const actions = {
  getData({commit, state}) {
    AjaxPlugin.$http.get(io_base).then((res) => {
      commit('GET_DATA', res.data)
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
