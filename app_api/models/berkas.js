const mongoose = require ("mongoose");
//buat kita bikin schema dan model
//1. Buat Schema
const schemaBerkas = new mongoose.Schema ({
    nama_berkas: String,
    tgl_berkas: Date,
    jenis_file: String,
    pemilik: [String],
});
//2. Buat model (compile schema to model)
mongoose.model("Berkas", schemaBerkas, "berkas");