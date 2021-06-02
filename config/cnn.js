const { Pool } = require('pg')

const compras_bdd = new Pool({
  host: 'ec2-35-171-250-21.compute-1.amazonaws.com',
  port: '5432',
  database: 'dbuadisl21lrlv',
  user: 'gastqavwuzrgmi',
  password: 'e95e874858f89be35db0c50ae5c8115ab0158cb9288b0db9f616d4870b2a00ee'
})

module.exports = {
  compras_bdd
}
