const express = require('express')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rutas de factura_detalle
app.use(require('./routes/factura_detalle.routes'))

app.listen(3000)
console.log('El sapo esta escuchando en http://localhost:3000')
