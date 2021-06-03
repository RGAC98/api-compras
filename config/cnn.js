const { Pool } = require('pg')

const compras_bdd = new Pool({
  host: 'ec2-18-214-140-149.compute-1.amazonaws.com',
  port: '5432',
  database: 'dcp1qm5qeld121',
  user: 'tlogilmggemoth',
  password: 'afaa0d46534bf734f15d2d3ce1a831639571169022ea5784ce0e471c6d62e223',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = {
  compras_bdd
}