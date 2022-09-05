const api = require('./api')
const router = require('express').Router()
const UniversidadesModel = require('../models/universidades')
const UniversidadeController = require('../controllers/universidades')


router.get('/', (req, res) => {
    res.json({message:'Home'});
})

router.get('/buscaAPI', async  (req, res) => {
    try {   
            const countries = ["argentina", "brasil", "chile", "colombia", "paraguai", "peru", "suriname", "uruguay"]
            
            for(let i=0; i < countries.length; i++){

            const { data } = await api.get(`http://universities.hipolabs.com/search?country=${countries[i]}`);
            res.json({ data })
            
            const dados = JSON.stringify(data)
            let dadosApi = JSON.parse(dados)
            //dadosApi = JSON.parse(dados.toString())

            console.log(dadosApi.domains[i])
            } 
    } catch (error) {
        res.send({ error: error.message})
    }
})

router.get('/universidades/:id?', UniversidadeController.get)
router.post('/universidades', UniversidadeController.post)
router.put('/universidades/:id', UniversidadeController.put)
router.delete('/universidades/:id', UniversidadeController.remove)


/*router.get('/universidades', (req, res) => {
    res.json({message:'UFR - Rondonópolis'});
})*/

module.exports = router