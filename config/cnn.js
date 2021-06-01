const {Pool} = require('pg')

const copras_bdd = new Pool({
    host: 'localhost',
    port: '5432',
    database: 'compras_bdd',
    user: 'postgres',
    password: '1459'
})

module.exports = {
    copras_bdd
}