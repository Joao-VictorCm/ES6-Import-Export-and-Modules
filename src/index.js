import React from "react";
import ReactDOM from "react-dom";
//Exemplo 01 de importação
//import pi, { doublePI, triplePI } from "./math";

//Exemplo 02 exemplo de importação
import * as pi from "./math";
console.log(pi);

ReactDOM.render(
  <ul>
    {/* <p>Exemplo 01</p>
    <li>{pi}</li>
    <li>{doublePI()}</li>
    <li>{triplePI()}</li> */}

    <p>Exemplo 02</p>
    <li>{pi.default}</li>
    <li>{pi.doublePI()}</li>
    <li>{pi.triplePI()}</li>
  </ul>,
  document.getElementById("root")
);
