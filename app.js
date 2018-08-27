const express = require('express')
const server = express()

const PORT = 9100

server.use(express.static('./'))

server.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`)
})