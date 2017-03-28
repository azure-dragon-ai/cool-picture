require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing' ?
	require('./webpack.prod.conf') :
	require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()

/******************
 * 模拟后台数据    *
 * 并且添加到 json *
 ******************/
var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');
var api = express.Router()

api.get('/base', function(req, res, next) {
  superagent.get('http://www.zcool.com.cn/').end((err, sres) => {
    if(err) return next(err);
    var $ = cheerio.load(sres.text);
    var data = {
      list: []
    };

    $('.camWholeBoxUl li').each((i, ele) => {
      var $ele = $(ele);
      var tip = $ele.find('.camLiDes')

      data.list.push({
        title: $ele.find('.camLiTitleC a').text(),
        image: $ele.find('img').attr('src'),
        username: $ele.find('table span').text(),
        userhead: $ele.find('table img').attr('src'),
        update: tip.html().match(/<br>(.*)<br>/)[1] || '',
        reqi: $ele.find('.camLiDes .cf30').eq(0).text() || '',
        pinglun: $ele.find('.camLiDes .cf30').eq(1).text() || '',
        tuijian: $ele.find('.camLiDes .cf30').eq(2).text() || ''
      })
    })

    res.send(data)
    if (data.list.length > 0) {
      fs.writeFileSync(path.resolve(__dirname, '../data/base_data.json'), JSON.stringify(data));
    }
  });
})

app.use('/io', api)



var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		hotMiddleware.publish({
			action: 'reload'
		})
		cb()
	})
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
	var options = proxyTable[context]
	if (typeof options === 'string') {
		options = {
			target: options
		}
	}
	app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function() {
	console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function(err) {
	if (err) {
		console.log(err)
		return
	}

	// when env is testing, don't need open it

	if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
		opn(uri)
	}
})
