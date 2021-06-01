const {Router} = require('express')
const cabecera_controller = require('../controller/cabecera.controller')

const route = Router()

route.get('/cabeceras', cabecera_controller.GetCabeceras);

// route.get('/cabeceras/:name', pizza_controller.GetPizzasByName)

route.post('/cabeceras', cabecera_controller.PostCreateCabecera);

route.put('/cabeceras/:fcab_id', cabecera_controller.UpdateCabecera);

route.delete('/cabeceras/:fcab_id', cabecera_controller.DeleteCabecera);

module.exports = route