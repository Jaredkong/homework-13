const connection = require("../config/connection.js");

const orm = {
    selectAll: function (tableInput, cb) {
        const queryString = 'SELECT * FROM ??';
        connection.query(queryString, tableInput, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableInput, newValue, cb) {
        const queryString = `INSERT INTO ??(burger_name) VALUES (?)`;
        connection.query(queryString, [tableInput, newValue], (err, result) => {
            if (err) throw err;
            console.log(`${result.affectedRows} burgers modified`);
            console.log(`Inserted ${newValue}!!!`);
            cb(result);
        });
    },
    updateOne: function (tableInput, burger_id, cb) {
        const queryString = `UPDATE ?? SET devoured = TRUE WHERE id = ?;`;
        connection.query(queryString, [tableInput, burger_id], (err, result) => {
            if (err) throw err;
            console.log(`${result.affectedRows} burgers modified`);
            console.log(`burger id ${burger_id} has been devoured!`);
            cb(result);
        });
    },

};

module.exports = orm