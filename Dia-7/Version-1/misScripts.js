function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function Calcular(){
    let ventas=[];
    let totalVentas = 0;
    for(let i=1;i<=6;i++){
        ventas.push(extraerNumeroDesdeElemento("ventasTienda"+i)); 
        totalVentas+=ventas[i-1];
    }

    let mensajeSalida = "Total Ventas: "+totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;



}