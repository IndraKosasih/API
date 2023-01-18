const mongoose = require("mongoose");

const negara = mongoose.model("Negara");

const negaraList = (req, res) => {
    negara.find({},
        function (err, result) {
            if (err) {
                res.status(500)
                    .json({
                        "status": "failed"
                    });
            } else {
                res.status(200)
                    .json(result);
            }
        });

}

const negaraCreate = (req, res) => {
    negara.create({
        nama_negara: req.body.nama_negara,
        ibukota: req.body.ibukota,
        benua: req.body.benua,
        populasi: req.populasi,
        luas_wilayah: req.body.luas_wilayah,
        tgl_bergabung: req.body.tgl_bergabung,
        mata_uang: req.body.mata_uang
    }, (err, result) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(result);
        }
    });

}

const negaraReadOne = (req, res) => {
    negara
        .findById(req.params.id)
        .exec((err, negara) => {
            res
                .status(200)
                .json(negara);
        });
}

const negaraUpdateOne = (req, res) => {
    negara
        .findById(req.params.id)
        .exec((err, negara) => {
            negara.nama_negara= req.body.nama_negara,
            negara.ibukota= req.body.ibukota,
            negara.benua= req.body.benua,
            negara.populasi= req.populasi,
            negara.luas_wilayah= req.body.luas_wilayah,
            negara.tgl_bergabung= req.body.tgl_bergabung,
            negara.mata_uang= req.body.mata_uang
            surat.save((err, result) => {
                if (err) {
                    res
                        .status(404)
                        .json(err);
                } else {
                    res
                        .status(200)
                        .json(result);
                }
            });

        });


}

const negaraDeleteOne = (req, res) => {
    negara
        .findById(req.params.id)
        .exec((err, negara) => {
            negara.remove((err, result) => {
                if (err) {
                    res
                        .status(404)
                        .json(null);
                }
                res
                    .status(204)
                    .json(null);
            });
        });
}

module.exports = {
    negaraList,
    negaraCreate,
    negaraReadOne,
    negaraUpdateOne,
    negaraDeleteOne
}