const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    domains: String,
    alpha_two_code: String,
    country: String,
    web_pages: String,
    name: String,
    state_province: String,
})

const Model = mongoose.model('universidades', schema)

module.exports = Model