// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA / ESQUEMA
const carreraSchema = mongoose.Schema({
    idCarrera: {
        type: String
    },
    titulo: {
        type: String
    },
    noSemestres: {
        type: Number
    }
})

// 3. CREACIÓN DEL MODELO
// mongoose.model("el nombre del modelo en singular", schema de arriba, "nombre de la colección")
const Carrera = mongoose.model("carrera", carreraSchema, "carreras")

// 4. EXPORTACIÓN
module.exports = { Carrera }