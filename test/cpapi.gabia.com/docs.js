var config = require('../../nightwatch/nightwatch.conf.js')
var pack = require('../../package.json')



module.exports = { // adapted from: https://git.io/vodU0
	before: function (browser, done) {
		server = require('../server')(done) // done is a callback that executes when the server is started
	},

	after: function () {
		server.close()
	},

	'/docs': function (browser) {
		browser
			.url('http://localhost:9000')   // visit the local url
			.windowSize('windowHandle', 1200, 960)
			.waitForElementNotVisible('loading-bar', 10 * 1000)
			.saveScreenshot(config.imgpath(browser) + 'index.png')

		browser
			.expect.element('.api-info-version').text.to.contain(pack.version)	
	
		browser
			.assert.title('클라우드 파트너 API') // assert contains
			.end()
		

	}
}