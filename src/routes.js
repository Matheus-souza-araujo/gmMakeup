const express = require('express')
const routes = express.Router()// variavel fica responsável pelas rotas
const instructors = require ("./app/controllers/instructors")

routes.get('/', function (req, res){
    return res.redirect("/initial")
})

routes.get('/initial', instructors.index)



module.exports = routes