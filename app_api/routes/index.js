var express = require("express");
var router = express.Router();

//import controller

const ctrlNegara = require("../controllers/negara");
router.route("/negara")
    .get(ctrlNegara.negaraList)
    .post(ctrlNegara.negaraCreate);

router.route("/negara/:id")
    .get(ctrlNegara.negaraReadOne)
    .put(ctrlNegara.negaraUpdateOne)
    .delete(ctrlNegara.negaraDeleteOne);


//method : get, push, patch, put, delete
module.exports = router;