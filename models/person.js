const mongoose = require('mongoose'); //inyectamos la dependencia

//se instancia un nuevo Schema en Mongoose
let PersonSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
})

//aqui se exporta la instancia de un modelo
module.exports = mongoose.model('Personas', PersonSchema)