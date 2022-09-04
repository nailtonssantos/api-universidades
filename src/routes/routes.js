const api = require('./api')
const router = require('express').Router()
const UniversidadesModel = require('../models/universidades')
const UniversidadeController = require('../controllers/universidades')


router.get('/', (req, res) => {
    res.json({message:'Home'});
})

const country = ['uruguay']

router.get('/buscaAPI', async  (req, res) => {
    try {
            const { data } = await api.get(`http://universities.hipolabs.com/search?country=${country}`);
            res.json({ data })

            try {
                
                for (let i = 0; i < data.length; i++){
                                         
                    let dadosAPI = []

                    dadosAPI = ({
                        domains: data.domains,
                        country: data.country,
                        alpha_two_code: data.alpha_two_code,
                        country: data.country,
                        web_pages: data.web_pages,
                        name: data.name,
                        state_province: data.state_province
                    })

                    async function postAPI(req, res){
    
                        const universidade = new UniversidadesModel({
                            domains,
                            alpha_two_code,
                            country,
                            web_pages,
                            name,
                            state_province,
                        })
                    
                        universidade.save()
                        console.log({message: 'sucesso'})
                    }
                }
            }catch (error) {
                console.error({ error: error.message})
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