const baseUrl = 'http://cloud.bmob.cn/c643aa3e5b0420b8/io_base'

// 序列表单
const formatParams = function(data) {
	var arr = [];
	for (var name in data) {
		arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	}
	return arr.join('&');
}

// jsonp
export function jsonp(url, data = {}) {
  return new Promise((res, rej) => {
    data.url = url
    let callbackName = '_JSONP_CC_' + (Math.random()*100000 >> 0)
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

// DOM 解析
const Dom = function (data) {
  var el = document.createElement('div')
  el.innerHTML = data
  this.el = el;
  return function (sel) {
    return el.querySelectorAll(sel)
  }
}

// 入口
export function $dom(data) {
  return new Dom(decodeURI(data))
}

export function homelist($) {
  let list = []
  $('.camWholeBoxUl li').forEach(el => {
    let href = el.querySelector('.camLiTitleC a').getAttribute('href')

    list.push({
      title: el.querySelector('.camLiTitleC a').textContent,
      link: href.replace(/(http:\/\/www.zcool.com.cn)|(\.html)/g,''),
      image: el.querySelector('img').getAttribute('src'),
      username: el.querySelector('table span').textContent,
      userhead: el.querySelector('table img').getAttribute('src'),
      update: (el.querySelector('.camLiDes').innerHTML).match(/<br>(.*)<br>/)[1] || '',
      reqi: el.querySelectorAll('.camLiDes .cf30')[0].textContent || '',
      pinglun: el.querySelectorAll('.camLiDes .cf30')[1].textContent || '',
      tuijian: el.querySelectorAll('.camLiDes .cf30')[2].textContent || ''
    })
  })
  // console.log(list);
  return list
}

export function showbox($) {
  let list = []
  $('.indexShowBox li img').forEach(el => {
    list.push({
      image: el.getAttribute('src')
    })
  })
  return list
}

export function workContent($) {
  return $('.workContent')[0].innerHTML
}

export function workInfor($) {
  return $('.workInfor')[0].innerHTML
}

export function workShow($) {
  let play = $('#letv-player')[0]
  play && play.parentNode.removeChild(play)
  let show = $('.workShow ul')[0]

  $('.workShow ul li a').forEach(el => {
    let hr = el.getAttribute('href').replace(/\/img.html#src=/,'')
    el.setAttribute('href', hr)
  })

  return show.innerHTML
}
