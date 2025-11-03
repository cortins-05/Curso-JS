function multiplicar() {
    //Obtener un numero
    let elementoTextoTabla = document.getElementById('textoTabla');
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //Obtener tabla
    let elementoTablaMultiplicar = document.getElementById('listaTabla');

    //Producir y mostrar resultados
    for (x = 1; x <= 10; x++) {
        //Calcular resultado
        let numeroResultado = numeroTabla * x;

        //Armar string con resultado
        let textoResultado = numeroTabla + " por " + x + " es igual a " + numeroResultado;

        //Crear un elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}