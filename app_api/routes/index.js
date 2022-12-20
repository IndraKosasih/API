var express = require("express");
var router = express.Router();
const {
    expressjwt: jwt
} = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload',
    algorithms: ['HS256']
})
//import controller
const ctrlBerkas = require("../controllers/berkas");
const ctrlSurat = require("../controllers/surat");
const ctrlAuth = require('../controllers/authentication');

router.route("/berkas")
    .get(ctrlBerkas.berkasList)
    .post(ctrlBerkas.berkasCreate);

router.route("/berkas/:id")
    .get(ctrlBerkas.berkasReadOne)
    .put(ctrlBerkas.berkasUpdateOne)
    .delete(ctrlBerkas.berkasDeleteOne);

router.route("/surat")
    .get(ctrlSurat.suratList)
    .post(ctrlSurat.suratCreate);

router.route("/surat/:id")
    .get(ctrlSurat.suratReadOne)
    .put(ctrlSurat.suratUpdateOne)
    .delete(ctrlSurat.suratDeleteOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
//method : get, push, patch, put, delete
module.exports = router;