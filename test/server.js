function makeServer(done) {
	var express = require('express')
	var app = express()

	app.use(express.static('./'))
	
	var server = app.listen(9000, function () {
		var port = server.address().port
		done()
	})
	return server
}
module.exports = makeServer;