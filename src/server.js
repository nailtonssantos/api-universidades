const express = require('express')
const PORT = 3000

const routes = require('./routes/routes')

const server = express()

const conn = require('./database/db')

//Read Body
server.use(
    express.urlencoded({
        extended: true
    })
)

server.use(express.json())

server.use('/api', routes)




server.listen(PORT || 8000, () => {
    console.log(`Servido está rodando em localhost: ${PORT}`)
})