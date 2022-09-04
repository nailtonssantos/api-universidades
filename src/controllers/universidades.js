const UniversidadesModel = require('../models/universidades')

async function get(req, res){
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const universidades = await UniversidadesModel.find(obj)
    
    res.send(universidades)
}

async function post(req, res){
    const {
        domains,
        alpha_two_code,
        country,
        web_pages,
        name,
        state_province,
    } = req.body

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

}


async function put(req, res){
    const { id } = req.params

    const universidade = await UniversidadesModel.findOneAndUpdate({ _id: id }, req.body, {new: true})

    res.send({
        message: 'success',
        universidade,
    }) 
}

async function remove(req, res){
    const { id } = req.params
    let message = ""
    try {
        const remove = await UniversidadesModel.deleteOne({ _id: id })
        message =  'success'
    } catch (error) {
        message =  `Error: ${error}`

    }

    res.send({
        message
    })
}

module.exports = {
    get,
    post,
    put,
    remove,
}