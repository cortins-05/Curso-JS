let url = 'https://my-json-server.typicode.com/fedegaray/telefonos/db';

//Ver dispositivos
const contenedorDispositivos = document.getElementById('contenedorDispositivos');

function verDispositivos() {
    axios.get(url)
        .then(respuesta => {
            let dispositivos = respuesta.data.dispositivos;
            for (let dispositivo of dispositivos) {
                console.log(dispositivo);
                let lista = document.createElement('ul');
                for (let cualidad in dispositivo) {
                    let elementoLista = document.createElement('li');
                    elementoLista.textContent = cualidad + ' => ' + dispositivo[cualidad];
                    lista.appendChild(elementoLista);
                }
                contenedorDispositivos.appendChild(lista);
            }
        })
    
}


//Borrar dispositivos
const idDispositivo = document.getElementById('idDispo');
const avisoBorrado = document.getElementById('avisoBorrado');
function borrarDispo() {
    let id = idDispositivo.value;
    if (!id) {
        avisoBorrado.textContent = "⚠️ Ingresa un ID válido para borrar.";
    } else {
        axios.delete(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${idDispositivo.value}`)
        .then(respuesta => {
            avisoBorrado.textContent = 'Dispositivo borrado con exito con codigo: ' + respuesta.status;
            console.log(respuesta);
        })
        .catch(error => console.error(error));    
    }
    
    
}


//Actualizar dispositivos
const idActualizar = document.getElementById('idDispoActualizar');
const opcionActualizar = document.getElementById('opcionesActualizacion');
const avisoUpdate = document.getElementById('avisoUpdate');
const actualizacion = document.getElementById('actualizacion');

function actualizarDispositivo() {
    let valorActualizar = idActualizar.value;
    let actualizacionValue = actualizacion.value;
    if (!valorActualizar||!actualizacionValue) {
        avisoUpdate.textContent = "⚠️ Ingresa un ID válido y un valor para actualizar."
    } else {
        axios.patch(`https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/${valorActualizar}`, {
            opcionActualizar: actualizacionValue
        })
            .then(response => avisoUpdate.textContent = 'Dispositivo editado con exito con codigo: ' + response.status)
            .catch(error=>console.error(error))
    }
}