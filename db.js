const { createPool } = require('mysql2')
const mysql = require('mysql2/promise')

const db= mysql.createPool({
    host: 'localhost',
    user:'root',
    password:'root',
    database:"progra3"
});


module.exports=db;