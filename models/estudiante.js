// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA / ESQUEMA
const estudianteSchema = mongoose.Schema({
    idEstudiante: {
        type: String
    },
    nombre: {
        type: String
    },
    promedio: {
        type: Number
    }
})

// 3. CREACIÓN DEL MODELO
// mongoose.model("el nombre del modelo en singular", schema de arriba, "nombre de la colección")
const Estudiante = mongoose.model("estudiante", estudianteSchema, "estudiantes")

// 4. EXPORTACIÓN
module.exports = { Estudiante }