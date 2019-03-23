// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA / ESQUEMA
const profesorSchema = mongoose.Schema({
    idProfesor: {
        type: String
    },
    Nombre: {
        type: String
    },
    Profesion: {
        type: String
    }
})

// 3. CREACIÓN DEL MODELO
// mongoose.model("el nombre del modelo en singular", schema de arriba, "nombre de la colección")
const Profesor = mongoose.model("profesor", profesorSchema, "profesores")

// 4. EXPORTACIÓN
module.exports = { Profesor }