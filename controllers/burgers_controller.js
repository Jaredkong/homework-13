'use strict';

const express = require('express');

const router = express.Router();

const burger = require('../models/burger');


router.get('/', (req, res) => {
    burger.all(function (data) {
        const hbsObj = {
            burgerList: data
        };
        res.render('index', hbsObj);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burgerName, function (result) {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/devour', (req, res) => {
    burger.updateDevour(req.body.id, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});



module.exports = router;