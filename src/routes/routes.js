const axios = require('axios')
const router = require('express').Router()


router.get('/', (req, res) => {
    res.json({message:'Home'});
})

const country = ['uruguay']

router.get('/buscaAPI', async  (req, res) => {
    try {
        const { data } = await axios.get(`http://universities.hipolabs.com/search?country=brazil`);
        //const obj = JSON.parse({ data });
        console.log({ data })
    } catch (error) {
        res.send({ error: error.message})
        console.error(error)
    }
})


router.get('/universidades', (req, res) => {
    res.json({message:'UFR - Rondonópolis'});
})



module.exports = router