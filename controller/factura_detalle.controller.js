const factura_detalle_modelo = require('../model/factura_detalle.model')

async function POSTfactura_detalle(req, res) {
  const fdet_fcab_id = req.body.fdet_fcab_id

  try {
    const respuesta = await factura_detalle_modelo.InsertFactura_Detalle(fdet_fcab_id)
    res.status(200).send({ mensaje: respuesta })
  } catch (error) {
    res.status(500).send({ mensaje_error: error.message })
  }
}

async function GETfactura_detalleProveedor(req, res) {
  const dni = req.params.dni

  try {
    const respuesta = await factura_detalle_modelo.SelectFatura_DetalleByProveedor(dni)
    res.status(200).send({ facturas: respuesta })
  } catch (error) {
    res.status(500).send({ mensaje_error: error.message })
  }
}

async function GETfactura_detalleIdFctura(req, res) {
  const nroFactura = req.params.nroFactura

  try {
    const respuesta = await factura_detalle_modelo.SelectFatura_DetalleByIdFactura(nroFactura)
    res.status(200).send({ facturas: respuesta })
  } catch (error) {
    res.status(500).send({ mensaje_error: error.message })
  }
}

async function GETfactura_detalleProducto(req, res) {
  const producto = req.params.producto

  try {
    const respuesta = await factura_detalle_modelo.SelectFatura_DetalleByProducto(producto)
    res.status(200).send({ facturas: respuesta })
  } catch (error) {
    res.status(500).send({ mensaje_error: error.message })
  }
}

async function DELETEfactura_detalle(req, res) {
  const fdet_id = req.params.fdet_id

  try {
    const respuesta = await factura_detalle_modelo.DeleteFactura_Detalle(fdet_id)
    res.status(200).send({ mensaje: respuesta })
  } catch (error) {
    res.status(500).send({ mensaje_error: error.message })
  }
}

module.exports = {
  POSTfactura_detalle,
  GETfactura_detalleProveedor,
  GETfactura_detalleIdFctura,
  GETfactura_detalleProducto,
  DELETEfactura_detalle
}
