const orm = require ('../config/orm.js')

const burger = {
    all: function (cb) {
        orm.selectAll('burgers', (result) => {
            cb(result);
        });
    },
    create: function (newValue, cb) {
        orm.insertOne('burgers', newValue, (result) => {
            cb(result);
        });
    },
    updateDevour: function (burgerId, cb) {
        orm.updateOne('burgers', burgerId, (result) => {
            cb(result);
        });
    },
 
};


module.exports = burger;