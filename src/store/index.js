import Vue from 'vue'
import Vuex from 'vuex'
import { AjaxPlugin } from 'vux'

Vue.use(Vuex)

let io_base = './data/base_data.json'
let io_home_list = './data/home_list_data.json'
if (process.env.NODE_ENV === 'development') {
  io_base = '/io/base'
  io_home_list = '/io/homelist'
}

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
    AjaxPlugin.$http.get(io_base).then((res) => {
      commit('GET_DATA', res.data)
    })
  },
  getListBy({commit, state}, page) {
    AjaxPlugin.$http.get(io_home_list + '?page=' + page).then((res) => {
      commit('GET_DATA', { list: state.base_data.list.concat(res.data.list) })
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
