const {compras_bdd} = require('../config/cnn')

async function InsertFactura_Producto(fpro_fcab_id, fpro_fdet_id, fpro_cantidad, fpro_producto, fpro_pvp, fpro_iva)
{
    const query = `INSERT INTO factura_productos(fpro_fcab_id, fpro_fdet_id, fpro_cantidad, fpro_producto, fpro_pvp, fpro_iva) 
                   VALUES ($1, $2, $3, $4, $5, $6);`
    await compras_bdd.query(query, [fpro_fcab_id, fpro_fdet_id, fpro_cantidad, fpro_producto, fpro_pvp, fpro_iva])
    return 'Producto ingresado a la factura detalle'
}

async function UPDATE_factura_productos(fpro_fcab_id, fpro_fdet_id, fpro_producto, fpro_cantidad)
{
    const query = `UPDATE factura_productos SET fpro_cantidad = $1 
                   WHERE fpro_fcab_id = $2 AND fpro_fdet_id = $3 AND fpro_producto = $4;`
    await compras_bdd.query(query, [fpro_cantidad, fpro_fcab_id, fpro_fdet_id, fpro_producto])
    return 'Producto actualizado'
}

async function DELETE_factura_productos(fpro_fcab_id, fpro_fdet_id, fpro_producto)
{
    const query = `DELETE FROM factura_productos WHERE fpro_fcab_id = $1 AND fpro_fdet_id = $2 AND fpro_producto = $3`
    await compras_bdd.query(query, [fpro_fcab_id, fpro_fdet_id, fpro_producto])
    return 'Producto eliminado de la factura'
}

async function SELECT_ALL_factura_productos()
{
    const query = `SELECT * FROM factura_productos`
    const facturas = await compras_bdd.query(query)
    return facturas.rows
}

async function SELECT_factura_producto_By_fcab_id(fcab_id)
{
    const query = `SELECT fpro_producto, fpro_cantidad, fpro_pvp, fpro_iva 
    FROM factura_productos
    WHERE fpro_fcab_id = $1`
    const factura = await compras_bdd.query(query, [fcab_id])
    return factura.rows
}

module.exports = {
    InsertFactura_Producto,
    UPDATE_factura_productos,
    DELETE_factura_productos,
    SELECT_ALL_factura_productos,
    SELECT_factura_producto_By_fcab_id
}