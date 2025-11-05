const boton = document.getElementById('miBoton');
const div = document.getElementById('miDiv');
const enlace = document.getElementById('miEnlace');

function evitarEnlace(event) {
    event.preventDefault();
    alert('Enlace no habilitado');
}

function mostrarMensaje(event) {
    alert(event.target);
    alert(event.currentTarget);
}

div.addEventListener('click', mostrarMensaje);
enlace.addEventListener('click', evitarEnlace);