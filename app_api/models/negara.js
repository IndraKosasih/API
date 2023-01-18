const mongoose = require ("mongoose");
//buat kita bikin schema dan model
//1. Buat Schema
const schemaNegara = new mongoose.Schema ({
    nama_negara: String,
    ibukota: String,
    benua: String,
    populasi: String,
    luas_wilayah: String,
    tgl_bergabung: Date,
    mata_uang: String,
});
//2. Buat model (compile schema to model)
mongoose.model("Negara", schemaNegara, "negara");