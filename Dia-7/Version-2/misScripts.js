function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function Calcular(){
    let ventas=[];
    for(let i=1;i<=6;i++){
        ventas.push(extraerNumeroDesdeElemento("ventasTienda"+i)); 
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);
    
    let mensajeSalida = "Total Ventas: "+totalVentas + " / Venta Mayor: "+ventaMayor+" / Venta menor: "+ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
}

function sumarTotal(array){
    let total = 0;
    for(let venta of array){
        total +=venta;
    }
    return total;
}

function calcularMayor(array){
    let maximo = array[0];
    for(venta of array){
        if(venta>maximo){
            maximo = venta;
        }
    }
    return maximo;
}

function calcularMenor(array){
    let minimo = array[0];
    for(venta of array){
        if(venta<minimo){
            minimo = venta;
        }
    }
    return minimo;
}

