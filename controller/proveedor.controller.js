const { json } = require('express')
const proveedor_model = require('../model/proveedor.model')

async function GetProveedor(req, res)
{
    const proveedor = await proveedor_model.AllProveedor()
    res.status(200).send({proveedores: proveedor})
}

async function GetProveedorByName(req, res)
{
    const prv_nombre = req.params.prv_nombre

    const proveedor = await proveedor_model.ProveedorByName(prv_nombre)
    res.status(200).send({proveedores: proveedor})
}

async function PostCreateProveedor(req, res)
{
    const { prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado } = req.body

    const proveedor = await proveedor_model.CreateProveedor(prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado)
    res.status(200).send({mensaje: proveedor})
}

async function DELETEProveedor(req, res)
{
    const prv_id = req.params.prv_id

    const proveedor = await proveedor_model.DeleteProveedor(prv_id)
    res.status(200).send({mensaje: proveedor})
}

async function UPDATEProveedor(req, res)
{
    const { prv_id, prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado } = req.body

    try 
    {
        const proveedor = await proveedor_model.UpdateProveedor(prv_id, prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado)
        res.status(200).send({mensaje: proveedor,
                              body: {
                                prv_id: prv_id,
                                prv_dni: prv_dni,
                                prv_nombre: prv_nombre,
                                prv_ciudad: prv_ciudad,
                                prv_tipo: prv_tipo, 
                                prv_direccion: prv_direccion, 
                                prv_telefono: prv_telefono, 
                                prv_email: prv_email, 
                                prv_estado: prv_estado
                                }
                            })
    } catch (error) 
    {
        res.status(500).json({error})    
    }

    
}

module.exports = {
    GetProveedor,
    GetProveedorByName,
    PostCreateProveedor,
    DELETEProveedor,
    UPDATEProveedor
}
