const { Pool } = require('pg')

const compras_bdd = new Pool({
  host: 'ec2-107-21-10-179.compute-1.amazonaws.com',
  port: '5432',
  database: 'dav7lt88o9gm5b',
  user: 'kqscrxelbzwelp',
  password: '772bbbec8bc198984a40da7f9442841aabf95abd920812fa60974b1d567c9a32'
})

module.exports = {
  compras_bdd
}
