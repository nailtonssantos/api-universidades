const express = require('express')
const PORT = 3000


const routes = require('./routes/routes')

const server = express()

server.use(express.json())

server.use('/api', routes)




server.listen(PORT || 8000, () => {
    console.log(`Servido está rodando em localhost: ${PORT}`)
})