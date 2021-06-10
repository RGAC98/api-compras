const { json } = require('express')
const proveedor_model = require('../model/proveedor.model')

async function GetProveedor(req, res)
{
    try 
    {
        const proveedor = await proveedor_model.AllProveedor()
        res.status(200).json(proveedor)
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
}

async function GetProveedorByDni(req, res)
{   
    const prv_dni = req.params.prv_dni

    try 
    {
        const proveedor = await proveedor_model.ProveedorByDni(prv_dni)
        if(proveedor === '')
        {
            res.status(200).send({proveedores: "No se encontro proveedor"})
        }else
        {
            res.status(200).send({proveedores: proveedor})
        }
        
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
}

async function PostCreateProveedor(req, res)
{
    const { prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado } = req.body

    try 
    {
        var suma = 0
        var numero
        var x

        for (let i = 0; i < prv_dni.length; i++) 
        {
            numero = parseInt(prv_dni.charAt(i))
            if((i+1)%2 != 0)
            {
                x = numero * 2
                if(x>9)
                {
                    x = x - 9
                }
                suma = suma + x
            }else
            {
                suma = suma + numero
            }
        }

        if(suma % 10 != 0)
        {
            res.status(200).send({mensaje_error: "Cedula ingresada incorrecta"})
        }else
        {
            const proveedor = await proveedor_model.CreateProveedor(prv_dni, prv_nombre, prv_ciudad, prv_tipo, prv_direccion, prv_telefono, prv_email, prv_estado)
            res.status(200).send({mensaje: proveedor})
        }   
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
}

async function DELETEProveedor(req, res)
{
    const prv_id = req.params.prv_id

    try 
    {
        const proveedor = await proveedor_model.DeleteProveedor(prv_id)
        res.status(200).send({mensaje: proveedor})
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
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

async function DELETEProveedor_BY_DNI(req, res)
{
    const dni = req.params.dni
    try 
    {
        const proveedor = await proveedor_model.DeleteProveedorByDNI(dni)
        res.status(200).send({mensaje: proveedor})    
    } catch (error) 
    {
        res.status(500).send({mensaje_error: error.message})    
    }
}

module.exports = {
    GetProveedor,
    GetProveedorByDni,
    PostCreateProveedor,
    DELETEProveedor,
    UPDATEProveedor,
    DELETEProveedor_BY_DNI
}