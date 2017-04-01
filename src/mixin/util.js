import { AjaxPlugin } from 'vux'

const baseUrl = 'http://cloud.bmob.cn/c643aa3e5b0420b8/io_base'

export function getAjax(url, data = {}) {
  return new Promise((res, rej) => {
    AjaxPlugin.$http.get(url + '?' + formatParams(data)).then(cb => res(cb))
  })
}

export function jsonp(url, data = {}) {
  return new Promise((res, rej) => {
    data.url = url
    let callbackName = 'JSONP_CC_' + Date.now()
    data.callback = callbackName
    let params = formatParams(data)
  	let os = document.createElement('script')
  	document.body.appendChild(os)

    window[callbackName] = (json) => {
  		document.body.removeChild(os)
      window[callbackName] = null
      res(json)
  	}

    os.src = baseUrl + '?' + params;
  })
}

function formatParams(data) {
	var arr = [];
	for (var name in data) {
		arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	}
	return arr.join('&');
}
