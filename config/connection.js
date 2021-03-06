'use strict';

const mysql = require ('mysql');
const util = require ('util')

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else{
    const connection = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password: "password",
    database: "burgers_DB"

});
}


connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;