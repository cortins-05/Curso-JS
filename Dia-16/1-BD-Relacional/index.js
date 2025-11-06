//Configurar con eExpressJS el servidor de la app
const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en el puerto ${app.get('port')}`);
});

//Llamar al componente mysql
var mysql = require('mysql2');


//Establecer los parametros de conexion
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mibasenueva',
})

//Nos conectamos con la base
connection.connect();

//Agregar un nuevo registro
connection.query('insert into cliente values(1,"Federico",1,1555155,"AV. SiempreViva 4269")', function (error, resultados) {
    if (error) throw error;
    console.log(resultados);
});

//Realizar la consulta a la tabla
connection.query('select * from cliente', function (error, filas) {
    if (error) throw error;
    console.log(filas);
})

//Realizamos modificaciones
connection.query('update cliente set genero=0,telefono=1666155 where identificador=1', function (err, resultados) {
    if (err) throw err;
    console.log(resultados);
})

//Realizar la consulta a la tabla
connection.query('select * from cliente', function (error, filas) {
    if (error) throw error;
    console.log(filas);
})

//Eliminar un registro
connection.query('delete from cliente where identificador=1', function (error, resultados) {
    if (error) throw error;
    console.log(resultados);
})

//Realizar la consulta a la tabla
connection.query('select * from cliente', function (error, filas) {
    if (error) throw error;
    console.log(filas);
})

//Cerramos la conexion
connection.end();