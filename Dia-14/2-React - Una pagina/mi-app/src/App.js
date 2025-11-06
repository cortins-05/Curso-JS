import React from "react";
import Saludo from "./Saludo";
import Mensaje from "./Mensaje";

function App() {
  return (
    <div>
      <Saludo nombre='Lucas'></Saludo>
      <Mensaje mensaje='Bienvenido a mi aplicacion React'></Mensaje>
      <Saludo nombre='Federico'></Saludo>
    </div>
  )
}

export default App;