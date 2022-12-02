const mongoose = require("mongoose");

const surat = mongoose.model("Surat");

const suratList = (req, res) => {
    surat.find({},
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

const suratCreate = (req, res) => {
    surat.create({
        nomor_surat: req.body.nomor_surat,
        tgl_surat: req.body.tgl_surat,
        jenis_surat: req.body.jenis_surat,
        uraian: req.body.uraian,
        pejabat_penandatangan: req.body.pejabat_penandatangan,
        nama_penandatangan: req.body.nama_penandatangan,
        nama_ditugaskan: req.body.nama_ditugaskan
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

const suratReadOne = (req, res) => {
    surat
        .findById(req.params.id)
        .exec((err, surat) => {
            res
                .status(200)
                .json(surat);
        });
}

const suratUpdateOne = (req, res) => {
    surat
        .findById(req.params.id)
        .exec((err, surat) => {
            surat.nama_surat = req.body.nama_surat;
            surat.tgl_surat = req.body.tgl_surat;
            surat.jenis_surat = req.body.jenis_surat,
                surat.uraian = req.body.uraian,
                surat.pejabat_penandatangan = req.body.pejabat_penandatangan,
                surat.nama_penandatangan = req.body.nama_penandatangan,
                surat.nama_ditugaskan = req.body.nama_ditugaskan
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

const suratDeleteOne = (req, res) => {
    surat
        .findById(req.params.id)
        .exec((err, surat) => {
            surat.remove((err, result) => {
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
    suratList,
    suratCreate,
    suratReadOne,
    suratUpdateOne,
    suratDeleteOne
}