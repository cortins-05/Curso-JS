function crearTiendas(contenedorID,min,cantidad){
    let elementoContenedor = document.getElementById(contenedorID);
    for(let conteoTiendas = 1; conteoTiendas<=cantidad;conteoTiendas++){
        let textoEtiqueta = "Tienda "+conteoTiendas;
        let parrafoTienda = crearParrafoTienda(textoEtiqueta,min);
        elementoContenedor.appendChild(parrafoTienda);
    }
}

function crearParrafoTienda(textoLabel,valorMin){
    let elementoParrafo = document.createElement("p");
    let elementoEtiqueta = document.createElement("label");
    elementoEtiqueta.innerText = textoLabel+": ";
    elementoEtiqueta.setAttribute("for",textoLabel);
    let elementoInput = document.createElement("input");
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);
    return elementoParrafo;
}

function extraerNumeroDesdeElemento(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;
}

function Calcular(){
    let ventas=[];
    let posicionVentas = 0;
    let elementoVentas = document.getElementById("itemTienda");
    for(let item of elementoVentas.children){
        ventas.push(item.children[1]);
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
        venta = extraerNumeroDesdeElemento(venta.id);
        total +=venta;
    }
    return total;
}

function calcularMayor(array){
    let maximo = extraerNumeroDesdeElemento(array[0].id);
    let pos=0;
    let cont = 0;
    for(let venta of array){
        venta = extraerNumeroDesdeElemento(venta.id);
        if(venta>maximo){
            maximo = venta;
            pos=cont;
        }
        cont++;
    }
    array[pos].style.backgroundColor = "red";
    return maximo;
}

function calcularMenor(array){
    let minimo = extraerNumeroDesdeElemento(array[0].id);
    let pos=0;
    let cont = 0;
    for(let venta of array){
        venta = extraerNumeroDesdeElemento(venta.id);
        if(venta<minimo){
            minimo = venta;
            pos=cont;
        }
        cont++;
    }
    array[pos].style.backgroundColor = "yellow";
    return minimo;
}

