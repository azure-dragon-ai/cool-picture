var path = require('path');
var fs = require('fs');

// 将获取的数据存储为静态文件
exports.setData = function(data, name) {
  fs.writeFileSync(path.resolve(__dirname, '../dist/data/'+ name +'.json'), JSON.stringify(data));
}

exports.homelist = function($) {
  var list = [];
  $('.camWholeBoxUl li').each((i, ele) => {
    var $ele = $(ele);
    var tip = $ele.find('.camLiDes')

    list.push({
      title: $ele.find('.camLiTitleC a').text(),
      image: $ele.find('img').attr('src'),
      username: $ele.find('table span').text(),
      userhead: $ele.find('table img').attr('src'),
      update: tip.html().match(/<br>(.*)<br>/)[1] || '',
      reqi: $ele.find('.camLiDes .cf30').eq(0).text() || '',
      pinglun: $ele.find('.camLiDes .cf30').eq(1).text() || '',
      tuijian: $ele.find('.camLiDes .cf30').eq(2).text() || ''
    })
  });

  return list
}

exports.showbox = function($) {
  var showbox = [];
  $('.indexShowBox li img').each((i, ele) => {
    var $ele = $(ele);
    showbox.push({
      image: $ele.attr('src')
    })
  });

  return showbox
}
