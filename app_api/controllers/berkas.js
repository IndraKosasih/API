const mongoose = require ("mongoose");

const berkas = mongoose.model("Berkas");

const berkasList = (req,res) => {
    berkas.find({},
        function(err, result) {
            if (err) {
                res.status(500)
                    .json({"status" : "failed"});
            } else {
                res.status(200)
                .json(
                    {
                        "status" : "success",
                        "data" : result
                    });
            }
        });

}

const berkasCreate = (req,res) => {
    berkas.create(
        {
            nama_berkas:req.body.nama_berkas,
            tgl_berkas: req.body.tgl_berkas,
            jenis_file : req.body.jenis_file,
            pemilik: req.body.pemilik
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

const berkasReadOne = (req,res) => {
    berkas
        .findById(req.params.id)
        .exec((err,berkas) => {
            res
            .status(200)
            .json(berkas);
        });
}

const berkasUpdateOne = (req,res) => {
    berkas
        .findById(req.params.id)
        .exec((err,berkas) => {
            berkas.nama_berkas = req.body.nama_berkas;
            berkas.tgl_berkas = req.body.tgl_berkas;
            berkas.jenis_file = req.body.jenis_file,
            berkas.pemilik = req.body.pemilik
            berkas.save((err, result) => {
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

const berkasDeleteOne = (req,res) => {
    berkas
        .findById(req.params.id)
        .exec((err,berkas) => {
            berkas.remove((err,result) => {
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
    berkasList,
    berkasCreate,
    berkasReadOne,
    berkasUpdateOne,
    berkasDeleteOne
}