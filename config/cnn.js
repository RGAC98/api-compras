const { Pool } = require('pg')

const compras_bdd = new Pool({
    host: 'ec2-52-4-111-46.compute-1.amazonaws.com',
    port: '5432',
    database: 'dasusdc71g58j1',
    user: 'xmtpyeyrpeayzr',
    password: 'a02474bc0b3397a427bd28666c44ec7a371477375145a9bb90901c0c0cd37250',
    ssl: { rejectUnauthorized: false }
  })

module.exports = {
  compras_bdd
}
