'use stric'

const router = require('express').Router();
const mongojs = require('mongojs');

const connectDB = require('../bd/connection');
const Product = require('../models/products');

connectDB();

/*  api listing. */
router.get('/', (req, res) => {
    res.send('is ok api works this alive');
});

router.get('/api/products', (req, res, next) => {
    Product.findProducts().then(docs => {
        res.status(200).send({ok:true, data:docs})
    }).catch(err => {
        res.status(500).send({ ok: false, error: err})
    })
})

module.exports = router;