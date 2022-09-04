const express = require('express')
const cors = require('cors')
const db = require('./database/db')
const routes = require('./routes/routes')
const PORT = 3000

const app = express()

//Conexão com o banco de dados
db.connect()

//habilita server para receber dados no formato JSON
app.use(express.json())

//Definindo as rotas
app.use('/api', routes)


app.listen(PORT || 8000, () => {
    console.log(`Servido está rodando em localhost: ${PORT}`)
})