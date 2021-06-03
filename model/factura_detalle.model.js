const {compras_bdd} = require('../config/cnn')

async function InsertFactura_Detalle(fdet_fcab_id) {
  const query = `INSERT INTO factura_detalle(fdet_fcab_id) VALUES ($1);`
  await compras_bdd.query(query, [fdet_fcab_id])
  return 'Detalle de factura creada'
}

async function SelectFatura_DetalleByProveedor(prv_dni) {
  const query = `SELECT prv.prv_dni, prv.prv_nombre, fcab.fcab_id, fcab.fcab_fecha_init, fcab.fcab_fecha_fin, fcab.fcab_tipo_pago, 
fpro.fpro_producto, fpro.fpro_cantidad, fpro.fpro_pvp, fpro.fpro_iva
FROM proveedores prv INNER JOIN factura_cabecera fcab ON prv.prv_id = fcab.fcab_prv_id
INNER JOIN factura_detalle fdet ON fcab.fcab_id = fdet.fdet_fcab_id
INNER JOIN factura_productos fpro ON fdet.fdet_id = fpro.fpro_fdet_id
WHERE prv.prv_dni = $1`
  const factura = await compras_bdd.query(query, [prv_dni])
  return factura.rows
}

async function SelectFatura_DetalleByIdFactura(fcab_id) {
  const query = `SELECT prv.prv_dni, prv.prv_nombre, fcab.fcab_id, fcab.fcab_fecha_init, fcab.fcab_fecha_fin, fcab.fcab_tipo_pago, 
fpro.fpro_producto, fpro.fpro_cantidad, fpro.fpro_pvp, fpro.fpro_iva
FROM proveedores prv INNER JOIN factura_cabecera fcab ON prv.prv_id = fcab.fcab_prv_id
INNER JOIN factura_detalle fdet ON fcab.fcab_id = fdet.fdet_fcab_id
INNER JOIN factura_productos fpro ON fdet.fdet_id = fpro.fpro_fdet_id
WHERE fcab.fcab_id = $1`
  const factura = await compras_bdd.query(query, [fcab_id])
  return factura.rows
}

async function SelectFatura_DetalleByProducto(fpro_producto) {
  const query = `SELECT prv.prv_dni, prv.prv_nombre, fcab.fcab_id, fcab.fcab_fecha_init, fcab.fcab_fecha_fin, fcab.fcab_tipo_pago, 
fpro.fpro_producto, fpro.fpro_cantidad, fpro.fpro_pvp, fpro.fpro_iva
FROM proveedores prv INNER JOIN factura_cabecera fcab ON prv.prv_id = fcab.fcab_prv_id
INNER JOIN factura_detalle fdet ON fcab.fcab_id = fdet.fdet_fcab_id
INNER JOIN factura_productos fpro ON fdet.fdet_id = fpro.fpro_fdet_id
WHERE fpro.fpro_producto = $1`
  const factura = await compras_bdd.query(query, [fpro_producto])
  return factura.rows
}

async function DeleteFactura_Detalle(fdet_id) {
  const query = `DELETE FROM factura_detalle WHERE fdet_id = $1`
  await compras_bdd.query(query, [fdet_id])
  return 'Detalle de la Factura eliminada correctamente'
}

async function Select_ALL_Factura_Detalle(){
  const query = `SELECT * FROM factura_detalle`
  const detalles = await compras_bdd.query(query)
  return detalles.rows
}

module.exports = {
  InsertFactura_Detalle,
  SelectFatura_DetalleByProveedor,
  SelectFatura_DetalleByIdFactura,
  SelectFatura_DetalleByProducto,
  DeleteFactura_Detalle,
  Select_ALL_Factura_Detalle
}