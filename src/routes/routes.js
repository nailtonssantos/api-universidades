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

            let { data } = await api.get(`http://universities.hipolabs.com/search?country=${countries[i]}`);
            res.json({ data })

            console.log(countries[i])
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