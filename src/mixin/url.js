import { jsonp, getAjax } from '../mixin/util.js'

export let ajax = getAjax
export let io_base = './data/base_data.json'
export let io_home_list = './data/home_list_data.json'

if (process.env.NODE_ENV === 'development' || process.env.BMOB) {
  io_base = '/io/base'
  io_home_list = '/io/homelist'
}

if (process.env.BMOB) {
  ajax = getAjax
}
