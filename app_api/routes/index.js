var express = require("express");
var router = express.Router();

//import controller
const ctrlBerkas = require("../controllers/berkas");
const ctrlSurat = require("../controllers/surat");

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

//method : get, push, patch, put, delete
module.exports = router;