const express = require('express')
const morgan = require('morgan')
const app = express()

const PORT = process.env.PORT

app.use(morgan('combined', {
	// skip: function (req, res) { return res.statusCode >= 300 } //
}))

app.use('/', express.static(__dirname))
app.listen(PORT, function() { console.log(`listening on PORT: ${PORT}.`, __dirname) })