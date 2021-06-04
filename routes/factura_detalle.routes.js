const {Router} = require('express')
const factura_detalle_controller = require('../controller/factura_detalle.controller')

const route = Router()

route.post('/factura_detalle', factura_detalle_controller.POSTfactura_detalle)
route.get('/factura_detalle/proveedor/:dni', factura_detalle_controller.GETfactura_detalleProveedor)
route.get('/factura_detalle/nroFactura/:nroFactura',factura_detalle_controller.GETfactura_detalleIdFctura)
route.get('/factura_detalle/producto/:producto',factura_detalle_controller.GETfactura_detalleProducto)
route.delete('/factura_detalle/:fdet_id', factura_detalle_controller.DELETEfactura_detalle)
route.get('/factura_detalle', factura_detalle_controller.GET_All_factura_detalles)
route.get('/factura_detalle/facturas/:dni_proveedor', factura_detalle_controller.GET_facturas_total_pagar_by_dni_prv)

module.exports = route