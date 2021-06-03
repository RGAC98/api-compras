const express = require('express')
const app = express()

//Puerto
const PORT = process.env.PORT || 3000

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas de factura_producto
app.use(require('./routes/factura_producto.routes'))

//rutas proveedores
app.use(require('./routes/proveedor.routes'))

//rutas factura_cabecera
app.use(require('./routes/cabecera.routes'))

//rutas de factura_detalle
app.use(require('./routes/factura_detalle.routes'))

app.listen(PORT)
console.log(`El sapo esta escuchando en http://localhost:${PORT}`)