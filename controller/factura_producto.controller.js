const factura_producto_modelo = require('../model/factura_producto.model')

async function POSTfactura_producto(req, res)
{
    const fpro_fcab_id = req.body.fpro_fcab_id
    const fpro_fdet_id = req.body.fpro_fdet_id
    const fpro_cantidad = req.body.fpro_cantidad
    const fpro_producto = req.body.fpro_producto
    const fpro_pvp = req.body.fpro_pvp
    const fpro_iva = req.body.fpro_iva

    try 
    {
        const respuesta = await factura_producto_modelo.InsertFactura_Producto(fpro_fcab_id, fpro_fdet_id, fpro_cantidad, fpro_producto, fpro_pvp, fpro_iva)
        res.status(200).send({mensaje: respuesta})
    } catch (error) 
    {
        console.log(error)
        res.status(500).send({mensaje_error: error.message})
    }
}

async function PUT_Factura_Productos(req, res)
{
    const id_cabecera = req.body.id_cabecera
    const id_detalle = req.body.id_detalle
    const producto = req.body.producto
    const cantidad = req.body.cantidad

    try 
    {
        const respuesta = await factura_producto_modelo.UPDATE_factura_productos(id_cabecera, id_detalle, producto, cantidad)
        res.status(200).send({mensaje: respuesta})   
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
}

async function DELETE_fac_productos(req, res)
{
    const id_cabecera = req.params.id_cabecera
    const id_detalle = req.params.id_detalle
    const producto = req.params.producto

    try 
    {
        const respuesta = await factura_producto_modelo.DELETE_factura_productos(id_cabecera, id_detalle, producto)   
        res.status(200).send({mensaje: respuesta}) 
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
}

async function GET_ALL_fac_productos(req, res)
{
    try 
    {
        const fac_productos = await factura_producto_modelo.SELECT_ALL_factura_productos()
        res.status(200).send({factura_productos: fac_productos})    
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
}

async function Get_factura_producto_fcab_id(req, res)
{
    const fcab_id = req.params.fcab_id
    try 
    {
        const producto = await factura_producto_modelo.SELECT_factura_producto_By_fcab_id(fcab_id)
        if(producto !== undefined)
        {
            res.status(200).send({productos: producto})
        }else
        {
            res.status(200).send({mensaje_error: "No se han ingresado productos a esta factura aun"})
        }    
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})   
    }
}

module.exports = {
    POSTfactura_producto,
    PUT_Factura_Productos,
    DELETE_fac_productos,
    GET_ALL_fac_productos,
    Get_factura_producto_fcab_id
}