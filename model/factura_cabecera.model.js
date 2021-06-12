const { compras_bdd } = require("../config/cnn");

async function AllCabeceras() {
  const query = `SELECT * FROM factura_cabecera`;
  const cabeceras = await compras_bdd.query(query);
  return cabeceras.rows;
}

async function CreateCabecera(fcab_prv_id, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago) {
  // fcab_id, ID de la cabecera es SERIAL
  const query = `INSERT INTO factura_cabecera(fcab_prv_id, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago) VALUES($1, $2, $3, $4)`;
  const insert_cabecera = await compras_bdd.query(query, [fcab_prv_id, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago]);
  return "Cabecera creada";
}

async function UpdateCabecera(fcab_id, fcab_prv_id, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago) {
  const query = `UPDATE factura_cabecera
	SET fcab_prv_id=$2, fcab_fecha_init=$3, fcab_fecha_fin=$4, fcab_tipo_pago=$5
	WHERE fcab_id = $1`;
  const update_cabecera = await compras_bdd.query(query, [fcab_id, fcab_prv_id, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago]);
  return "Cabecera actualizada";
}

async function DeleteCabecera(fcab_id) {
  const query = `DELETE FROM factura_cabecera WHERE fcab_id = $1`;
  const delete_cabecera = await compras_bdd.query(query, [fcab_id]);
  return "Cabecera eliminada";
}

async function GetCabeceraByID(fcac_id)
{
  const query = `SELECT prv.prv_dni, prv.prv_nombre, prv.prv_ciudad, prv.prv_direccion, prv.prv_telefono, prv.prv_email,
  fcab.fcab_id, fcab.fcab_fecha_init, fcab.fcab_fecha_fin, fcab.fcab_tipo_pago FROM 
  proveedores prv INNER JOIN factura_cabecera fcab ON fcab.fcab_prv_id = prv.prv_id
  WHERE fcab.fcab_id = $1`
  const cabecera = await compras_bdd.query(query, [fcac_id])
  return cabecera.rows[0]
}

module.exports = {
  AllCabeceras,
  CreateCabecera,
  UpdateCabecera,
  DeleteCabecera,
  GetCabeceraByID
};