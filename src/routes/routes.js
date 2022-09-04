const api = require('./api')
const router = require('express').Router()
const UniversidadeController = require('../controllers/universidades')


router.get('/', (req, res) => {
    res.json({message:'Home'});
})

const country = ['uruguay']

router.get('/buscaAPI', async  (req, res) => {
    try {
            const { data } = await api.get(`http://universities.hipolabs.com/search?country=${country}`);
            res.json({ data })

            /*for (let i = 0; i < data.length; i++){
                
                const domains = data.map(d => d.domains)
                const alpha_two_code = data.map(d => d.alpha_two_code)
                const country = data.map(d => d.country)
                const web_pages = data.map(d => d.web_pages)
                const name = data.map(d => d.name)
                const state_province = data.map(d => d.state-province)
                
                const universidade = new UniversidadesModel({
                    domains,
                    alpha_two_code,
                    country,
                    web_pages,
                    name,
                    state_province,
                })
                
                universidade.save()
                
                res.send({
                    message: 'success'
                })
        }*/

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