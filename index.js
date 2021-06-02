const express = require('express')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//rutas de factura_producto
app.use(require('./routes/factura_producto.routes'))

//rutas proveedores
app.use(require('./routes/proveedor.routes'))

//rutas factura_cabecera
app.use(require('./routes/cabecera.routes'))

//rutas de factura_detalle
app.use(require('./routes/factura_detalle.routes'))

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`El sapo esta escuchando en http://localhost:${port}`)})

