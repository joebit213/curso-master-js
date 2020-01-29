'use strict'

let express = require('express')
let bodyParser = require('body-parser')

let app = express()

//Archivos de rutas

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//CORS

//Rutas
app.get('/', (req, res, next) => {
  res.status(200).send(
    '<h1>Pagina de inicio</h1>'
  )
})

app.post('/test', (req, res, next) => {
  console.log(req.body.nombre)
  res.status(200).send({
    message: "Hello there"
  })
})

//Exportar el modulo de app
module.exports = app