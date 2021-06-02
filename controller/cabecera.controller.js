const { json } = require('express')
const cabecera_model = require('../model/factura_cabecera.model')

async function GetCabeceras(req, res)
{
    const cabeceras = await cabecera_model.AllCabeceras()
    res.status(200).send({cabeceras: cabeceras})
}

async function PostCreateCabecera(req, res)
{
    const fcab_prv_id = req.body.fcab_prv_id
    const fcab_fecha_init = req.body.fcab_fecha_init
    const fcab_fecha_fin = req.body.fcab_fecha_fin
    const fcab_tipo_pago = req.body.fcab_tipo_pago

    const cabecera = await cabecera_model.CreateCabecera(fcab_prv_id, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago)
    res.status(200).send({mensaje: cabecera})
}

async function UpdateCabecera(req, res)
{
    const fcab_id = req.params.fcab_id
    const fcab_prv_id = req.body.fcab_prv_id
    const fcab_fecha_init = req.body.fcab_fecha_init
    const fcab_fecha_fin = req.body.fcab_fecha_fin
    const fcab_tipo_pago = req.body.fcab_tipo_pago

    try 
    {
        const cabecera = await cabecera_model.UpdateCabecera(fcab_id, fcab_prv_id, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago)
        res.status(200).send({mensaje: cabecera,
                              body: {
                                fcab_id: fcab_id,
                                fcab_prv_id: fcab_prv_id,
                                fcab_fecha_init: fcab_fecha_init,
                                fcab_fecha_fin: fcab_fecha_fin,
                                fcab_tipo_pago: fcab_tipo_pago
                                }
                            })
    } catch (error) 
    {
        res.status(500).json({error})    
    }

    
}

async function DeleteCabecera(req, res)
{
    const fcab_id = req.params.fcab_id

    const cabecera = await cabecera_model.DeleteCabecera(fcab_id)
    res.status(200).send({mensaje: cabecera})
}

module.exports = {
    GetCabeceras,
    PostCreateCabecera,
    UpdateCabecera,
    DeleteCabecera
}