const { compras_bdd } = require('../config/cnn')

async function AllProveedor()
{
    const query = `SELECT * FROM proveedores`
    const proveedor = await compras_bdd.query(query)
    return proveedor.rows
}

async function ProveedorByDni(prv_dni)
{
    const query = `SELECT  p.prv_dni, p.prv_nombre 
        FROM public.proveedores p 
        WHERE p.prv_dni = $1;`
    const proveedor = await compras_bdd.query(query, [prv_dni])
    return proveedor.rows
}

async function CreateProveedor(prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado)
{
    const query = `INSERT INTO proveedores(prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado) VALUES($1, $2, $3, $4, $5, $6, $7, $8)`
    const proveedor = await compras_bdd.query(query, [prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado])
    return 'Proveedor creado'
}

async function DeleteProveedor(prv_id)
{
    const query = `DELETE FROM proveedores WHERE prv_id = $1`
    const proveedor = await compras_bdd.query(query, [prv_id])
    return 'Proveedor eliminado'
}

async function UpdateProveedor( prv_id, prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado)
{
    const query = `UPDATE proveedores SET prv_dni = $1, prv_nombre = $2, prv_ciudad = $3, prv_tipo = $4, prv_direccion = $5, prv_telefono = $6, prv_email = $7, prv_estado = $8 WHERE prv_id = $9`
    const proveedor = await compras_bdd.query(query, [prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado, prv_id])
    return 'Proveedor actualizado'
}

module.exports = {
    AllProveedor,
    ProveedorByDni,
    CreateProveedor,
    DeleteProveedor,
    UpdateProveedor
}