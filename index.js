// 1. Importaciones
const express = require("express")
const mongoose = require("mongoose")

// 2. "Middlewares"
// a. Express
const app = express()
app.use(express.json())

// b. Mongo
mongoose.connect("mongodb://localhost:27017/escuela")

// 3. Modelos

const { Estudiante } = require("./models/estudiante")
const { Profesor } = require("./models/profesor")
const { Carrera } = require("./models/carrera")

// 4. Rutas

//Ruta que trae todos los estudiantes
// http://localhost:3002/estudiantes
app.get("/estudiantes", (req, res) => {
    Estudiante.find({}).then(datitos => {
        res.send(datitos)
    })
})
//ruta de un solo estudiante
app.get("/estudiantes/:nombre", (req, res) => {
    const nombreABuscar = req.params.nombre
    Estudiante.find({nombre:nombreABuscar}).then(datitos => {
        res.send(datitos)
    })
})
//nuevo estudiante
app.post("/estudiantes/nuevo",(req,res)=>{
    //1. Crear estudiante bajo modelo
    const nuevoEstudiante = new Estudiante(req.body)

    //2. Inyectar en la base de datos y mostrar en postman que se inyectó 
    nuevoEstudiante.save((err,docs) => {
        res.send(docs)
    })
})
//Modificar estudiante
app.post("/estudiantes/:nombre", (req,res)=>{
    const cambios = req.body
    const nombreABuscar=req.params.nombre

    Estudiante.update(
        // 1. Query o el tipo de búsqueda
        {nombre: nombreABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})
//Eliminar estudiante
app.delete("/estudiantes/:nombre", (req,res) => {
    const cambios = req.body
    const nombreABuscar=req.params.nombre

    Estudiante.remove(
        // 1. Query o el tipo de búsqueda
        {nombre: nombreABuscar },   
        // 2. El cambio    
        {$set: cambios},
        //3. El callback (cuando sucede la edición, ¿qué hacemos?)
        (err, doc) => {
            // En caso de error
            if(err) console.log(err)
            // NO HAY ERROR NO HAY ERROR
            res.send(doc)
        }
    )
})

//ruta de profesores
app.get("/profesores", (req, res) => {
    Profesor.find({}).then(datitos => {
        res.send(datitos)
    })
})
//ruta de un solo profesor
app.get("/profesores/:Nombre", (req, res) => {
    const nombreABuscar = req.params.Nombre
    console.log(nombreABuscar)
    Profesor.find({Nombre:nombreABuscar}).then(datitos => {
        res.send(datitos)
    })
})
//nuevo profesor
app.post("/profesores/nuevo",(req,res)=>{
    //1. Crear profesor bajo modelo
    const nuevoProfesor = new Profesor(req.body)

    //2. Inyectar en la base de datos y mostrar en postman que se inyectó 
    nuevoProfesor.save((err,docs) => {
        res.send(docs)
    })
})

//rutas de carreras 
app.get("/carreras", (req, res) => {
    Carrera.find({}).then(datitos => {
        res.send(datitos)
    })
})
//ruta de una carrera
app.get("/carreras/:Nombre", (req, res) => {
    const nombreABuscar = req.params.Nombre
    console.log(nombreABuscar)
    Carrera.find({Nombre:nombreABuscar}).then(datitos => {
        res.send(datitos)
    })
})
//nueva carrera
app.post("/carreras/nuevo",(req,res)=>{
    //1. Crear carrera bajo modelo
    const nuevaCarrera = new Carrera(req.body)

    //2. Inyectar en la base de datos y mostrar en postman que se inyectó 
    nuevaCarrera.save((err,docs) => {
        res.send(docs)
    })
})


// 5. Listener (Switch prendido)
app.listen(3002,() => {
    console.log("Estamos conectados al puerto 3002")
})