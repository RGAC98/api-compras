const { Pool } = require('pg')

const compras_bdd = new Pool({
  host: 'localhost',
  port: '5432',
  database: 'compras_bdd',
  user: 'postgres',
  password: '1459'
})

module.exports = {
  compras_bdd
}
