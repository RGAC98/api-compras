const { compras_bdd } = require("../config/cnn");

async function AllCabeceras() {
  const query = `SELECT *
	FROM factura_cabecera`;
  const cabeceras = await compras_bdd.query(query);
  return cabeceras.rows;
}

async function CreateCabecera(
  fcab_prv_dni,
  fcab_fecha_init,
  fcab_fecha_fin,
  fcab_tipo_pago
) {
  // fcab_id, ID de la cabecera es SERIAL
  const query = `INSERT INTO factura_cabecera(fcab_prv_dni, fcab_fecha_init, fcab_fecha_fin, fcab_tipo_pago) VALUES($1, $2, $3, $4)`;
  const insert_cabecera = await compras_bdd.query(query, [
    fcab_prv_dni,
    fcab_fecha_init,
    fcab_fecha_fin,
    fcab_tipo_pago,
  ]);
  return "Cabecera creada";
}

async function UpdateCabecera(
  fcab_id,
  fcab_prv_dni,
  fcab_fecha_init,
  fcab_fecha_fin,
  fcab_tipo_pago
) {
  const query = `UPDATE factura_cabecera
	SET fcab_prv_dni=$2, fcab_fecha_init=$3, fcab_fecha_fin=$4, fcab_tipo_pago=$5
	WHERE fcab_id = $1`;
  const update_cabecera = await compras_bdd.query(query, [
    fcab_id,
    fcab_prv_dni,
    fcab_fecha_init,
    fcab_fecha_fin,
    fcab_tipo_pago,
  ]);
  return "Cabecera actualizada";
}

async function DeleteCabecera(fcab_id) {
  const query = `DELETE FROM factura_cabecera WHERE fcab_id = $1`;
  const delete_cabecera = await compras_bdd.query(query, [fcab_id]);
  return "Cabecera eliminada";
}

module.exports = {
  AllCabeceras,
  CreateCabecera,
  UpdateCabecera,
  DeleteCabecera,
};
