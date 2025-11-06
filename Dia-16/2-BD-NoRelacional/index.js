//Configurar con eExpressJS el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});

//Llamar al objeto MongoClient del componente mongoDB
const { MongoClient } = require('mongodb');

//Funcion asincrona para hacer las peticiones al servidor
async function usar() {
    //Crear nueva instancia de Mongo Client
    const client = new MongoClient("mongodb://127.0.0.1:27017/mibase");

    //Nos conectamos y hacemos nuestras peticiones
    try {
        const conexion = await client.connect();
        const controlador = conexion.db().collection('clientes');

        let respuesta, filas, filtro;

        //Insertar un nuevo registro
        const nuevoCliente = { nombre: 'Lucas Ortins', genero: 0, telefono: 1555155, domicilio: 'Av. Siempreviva 4269' };
        respuesta = await controlador.insertOne(nuevoCliente);
        console.log("Insertado: ", respuesta);

        //Realizar una consulta
        filas = await controlador.find().toArray();
        console.log("Seleccion: ", filas);

        //Modificar el registro anterior
        const cambiarCliente = { $set: { genero: 1, telefono: 166166 } };
        filtro = { nombre: "Lucas Ortins" };
        respuesta = await controlador.updateOne(filtro, cambiarCliente);
        console.log("Actualizado: ", respuesta);
        
        //Realizar una consulta
        filtro = { genero: 1 };
        filas = await controlador.find(filtro).toArray();
        console.log("Seleccion: ", filas);

        //Eliminar un registro
        filtro = { nombre: 'Lucas Ortins' };
        respuesta = await controlador.deleteOne(filtro);
        console.log("Eliminado: ", respuesta);
        
        //Realizar una consulta
        filas = await controlador.find().toArray();
        console.log("Seleccion: ", filas);
    } catch (error) {
        console.log(error);
    }
}

usar();