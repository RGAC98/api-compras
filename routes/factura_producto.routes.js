const {Router} = require('express')
const factura_producto_controller = require('../controller/factura_producto.controller')

const route = Router()

route.post('/factura_producto', factura_producto_controller.POSTfactura_producto)
route.put('/factura_producto', factura_producto_controller.PUT_Factura_Productos)
route.delete('/factura_producto', factura_producto_controller.DELETE_fac_productos)
route.get('/factura_producto', factura_producto_controller.GET_ALL_fac_productos)

module.exports = route