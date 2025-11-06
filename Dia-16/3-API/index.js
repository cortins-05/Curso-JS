//Importar el framework express
const express = require('express');
const app = express();

//Obtener el modulo conexion.js
const mongodb = require('./conexion');

//Configurar nuestra API para que trabaje en formato JSON
app.use(express.json());

//Definir un nuevo metodo GET
app.get("/clientes", (pedido, respuesta) => {
    //Obtener listado de clientes
    mongodb.conexionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("clientes");
            controlador.find().toArray()
                .then((filas) => respuesta.send(filas))
                .catch((error) => respuesta.send(error));
        });
})

//Definimos metodo POST
app.post("/clientes/create", (pedido, respuesta) => {
    mongodb.conexionDB()
        .then((conexion) => {
            const controlador = conexion.db().collection("clientes");
            controlador.insertOne(pedido.body)
                .then(respuesta.send("Nuevo registro creado"))
                .catch((error) => respuesta.send(error));
    })
})

//Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('El servidor esta en linea');
})
