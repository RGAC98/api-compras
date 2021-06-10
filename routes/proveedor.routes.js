const {Router} = require('express')
const proveedor_controller = require('../controller/proveedor.controller')

const route = Router()

route.get('/proveedor', proveedor_controller.GetProveedor)
route.get('/proveedor/:prv_dni', proveedor_controller.GetProveedorByDni)
route.post('/proveedor', proveedor_controller.PostCreateProveedor)
route.delete('/proveedor/:prv_id', proveedor_controller.DELETEProveedor)
route.put('/proveedor', proveedor_controller.UPDATEProveedor)
route.delete('/proveedor/dni/:dni', proveedor_controller.DELETEProveedor_BY_DNI)

module.exports = route