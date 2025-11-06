//Importar el framework express
const express = require('express');
const app = express();

//Obtener el modulo conexion.js
const mongodb = require('./connection');
const { conexionDB } = require('../3-API/conexion');

//Configurar nuestra API para que trabaje en formato JSON
app.use(express.json());

//Definir un nuevo metodo GET
app.get("/estudiantes/:legajo", (pedido, respuesta) => {
    const legajoEstudiante = pedido.params.legajo;
    mongodb.connectionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("estudiantes");
            controlador.find(legajoEstudiante).toArray()
                .then((filas) => { respuesta.send(filas) })
                .catch((error) => respuesta.send(error));
    })
})

//Definimos metodo POST
app.post("/estudiantes/create", (pedido, respuesta) => {
    mongodb.connectionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("estudiantes");
            controlador.insertOne(pedido.body)
                .then(respuesta.send("Nuevo registro creado"))
                .catch((error) => respuesta.send(error));
    })
})

app.post("/notas/create", (pedido, respuesta) => {
    mongodb.connectionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("notas");
            controlador.insertOne(pedido.body)
                .then(respuesta.send("Nuevo registro creado"))
                .catch((error) => respuesta.send(error));
    })
})

//Actualizar las notas
app.put("/notas/:id/update", (pedido, respuesta) => {
    const idNota = pedido.params.id;
    const nuevosDatos = pedido.body;
    mongodb.connectionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("notas");
            controlador.updateOne(
                { __id: new ObjectId(idNota) },
                { $set: nuevosDatos }
            )
                .then(respuesta.send('Nota actualizada'))
                .catch((error) => respuesta.send(error));
    })
})

//Eliminar las notas
app.delete("/notas/:id/delete", (pedido, respuesta) => {
    const idNota = pedido.params.id;
    mongodb.connectionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("notas");
            controlador.deleteOne({ __id: id })
                .then(respuesta.send('Eliminado correctamente'))
                .catch((error) => respuesta.send(error));
    })
})

//Ver aprobados
app.get("/notas/:codigo/aprobados", (pedido, respuesta) => {
    const codigoCurso = pedido.params.codigo;
    const filtro = { 
        codigo: codigoCurso, 
        nota: { $gte: 6 } 
    };
    mongodb.connectionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("examenes");
            controlador.find(filtro).toArray()
                .then((filas) => respuesta.send(filas))
                .catch((error) => respuesta.send(error));
    })
})

//Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('El servidor esta en linea');
})
