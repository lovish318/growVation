const mysql = require('mysql')

const connection = mysql.createConnection({
    user:"tester",
    host:"growvation.com",
    password:"z^gq=`2{<7YZDG'/",
    port:"3306",
    database:"development"
})

module.exports= connection