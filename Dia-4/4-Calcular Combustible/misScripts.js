function CalcularLitros(){
    var elementoKm = document.getElementById('textoKm');
    var textoKm = elementoKm.value;
    var cantKm = Number(textoKm);

    var cantLitros = cantKm/8.8;

    var resultado = document.getElementById('textoResultado');
    resultado.textContent = 'Carga ' + Math.ceil(cantLitros) + ' litros de combustible';
}