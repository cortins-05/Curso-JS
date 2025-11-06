let tabla1;
let tabla = $("#miTabla");
async function cargarJSON(){
    console.log("Empezamos cargando el json");
    let jsonTabla = await fetch('datos.json');
    let datosTabla = await jsonTabla.json()
    return datosTabla;
}

async function main(datosEnviados){
    let datos;
    if(datosEnviados){
        datos=datosEnviados
        tabla.empty();
    }else{
        datos = await cargarJSON()
    }
    console.log(datos);
    

    let cabecera = document.createElement("thead");
    let filaCabecera = document.createElement("tr");
    for(let dato in datos["header"]){
        let elementoCabecera = document.createElement("th");
        elementoCabecera.textContent = datos["header"][dato];
        filaCabecera.appendChild(elementoCabecera);
    }
    cabecera.appendChild(filaCabecera);

    tabla.append(cabecera);

    let body = document.createElement("tbody");
    for(let numero in datos["body"]){
        let tr = document.createElement("tr");
        let array = datos["body"][numero];
        for(let valor of array){
            let td = document.createElement("td");
            td.textContent = valor;
            tr.appendChild(td);
        }
        body.appendChild(tr);
    }
    
    $("table").append(body);

}

function crearTabla(datosEnviados=null) {
    if(datosEnviados){
        tabla1.destroy();
    }
    main(datosEnviados).then(() => {
        tabla1 = new DataTable("#miTabla",{
            scrollY: '300px',
            renderer: 'bootstrap'
        });
    });
}

async function enviar(){
    let nombre = $('#inputNombre').val();
    let position = $('#inputPosition').val();
    let office = $('#inputOffice').val();
    let año = $('#inputAño').val();
    let date = $('#inputDate').val();
    let salary = $('#inputSalary').val();

    if(nombre,position,office,año,date,salary){
        let datos = await cargarJSON();
        let nuevoIndice = Object.keys(datos.body).length;
        let clave = [nombre,position,office,año,date,salary];
        datos.body[nuevoIndice]=clave;
        console.log(datos);
        crearTabla(datos);
    }else{
        alert("Algun campo no ha sido rellenado");
    }

}