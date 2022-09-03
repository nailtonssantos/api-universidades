const api = require('./api')
const router = require('express').Router()


router.get('/', (req, res) => {
    res.json({message:'Home'});
})

const country = ['uruguay']

router.get('/buscaAPI', async  (req, res) => {
    try {
        const { data } = await api.get(`http://universities.hipolabs.com/search?country=${country}`);
        return res.send({ data })
    } catch (error) {
        res.send({ error: error.message})
    }
})


router.get('/universidades', (req, res) => {
    res.json({message:'UFR - Rondonópolis'});
})



module.exports = router