function cargarContenido() {
    //funcion que cargue las cotizaciones
    cargarCotizaciones(mostrarCotizacion);
    //funcion que cargue los elementos

    //funcion que cargue los textos
}

async function cargarCotizaciones(callback) {
    let promesa1 = await fetch('https://open.er-api.com/v6/latest/ARS');
    callback(await promesa1.json());
    
    let promesa2 = await fetch('https://open.er-api.com/v6/latest/USD');
    let datos2 = await promesa2.json();
    document.getElementById('UsdEur').append(datos2.rates.EUR);

    let datos3 = await crearPedido('https://open.er-api.com/v6/latest/ARS');
    
}

function mostrarCotizacion(datos) {
    document.getElementById('BitcoinUsd').append(datos.bpi.USD.rate);
}