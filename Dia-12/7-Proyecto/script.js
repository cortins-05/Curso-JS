let multimedia = document.getElementById('multimedia');
let buscador = document.getElementById('buscador');
let boton = document.getElementById('boton');
let resultados = document.getElementById('resultados');

let json_nombre = multimedia.value;

multimedia.addEventListener('change', () => {
    json_nombre=multimedia.value;
    let evento = new CustomEvent('alertaConstante');
    multimedia.dispatchEvent(evento);
})

multimedia.addEventListener('alertaConstante', function () {
    alert('Se ha seleccionado: ' + json_nombre);
})

buscador.addEventListener('keydown', (event) => {
    if (!isNaN(event.key) && event.key !== " ") {
        event.preventDefault();
    }
})

boton.addEventListener("click", busqueda);

function busqueda() {
    resultados.innerText = "";
    let valorBusqueda = buscador.value;
    let datosJson;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', json_nombre + '.json', true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status == 200) {
            datosJson = xhr.response;
            for (let multi of datosJson) {
                if (multi.NOMBRE.search(valorBusqueda.toUpperCase()) != -1) {
                    let div = document.createElement('div');
                    div.className = 'pelicula';

                    let h3 = document.createElement('h3');
                    h3.textContent = multi.NOMBRE;

                    let p = document.createElement('p');
                    p.textContent = multi.SINOPSIS;

                    div.appendChild(h3);
                    div.appendChild(p);
                    
                    resultados.appendChild(div);
                }
                
            }
        } else {
            datosJson = { NOMBRE: "Ninguna pelicula seleccionada", SINOPSIS: "Hay un error" };
        }
    }
    xhr.send();
}