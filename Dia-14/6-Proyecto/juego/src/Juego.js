import React, { useRef } from "react";

function Juego() {

    let numero = Math.floor(Math.random() * 11);
    const inputNumero = useRef(null);

    function comprobarNumero() {
        const valor = parseInt(inputNumero.current.value);
        if (valor == numero) {
            alert('Ganaste');
        } else {
            alert('Perdiste el valor era ' + numero);
        }
        numero = Math.floor(Math.random() * 11);
    }

    return (
        <div id="juego">
            <input type="number" ref={inputNumero}></input>
            <button onClick={comprobarNumero} >Apostar</button>
        </div>
    )
}

export default Juego;