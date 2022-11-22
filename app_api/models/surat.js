const mongoose = require ("mongoose");
//buat kita bikin schema dan model
//1. Buat Schema
const schemaSurat = new mongoose.Schema ({
    nomor_surat: String,
    tgl_surat: Date,
    jenis_surat: String,
    uraian: String,
    pejabat_penandatangan: String,
    nama_penandatangan: String,
    nama_ditugaskan: [String],
});
//2. Buat model (compile schema to model)
mongoose.model("Surat", schemaSurat, "surat");