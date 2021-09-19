import React from "react";
import ReactDOM from "react-dom";
import CountClick from "./CountClick";
import "./index.css";
import ListarPersonas from "./ListarPersonas";
import reportWebVitals from "./reportWebVitals";
import CrearPersona from "./CrearPersona";
import TestAPIForm from "./TestAPIForm";

let obj = {
  nombre: "Jorge",
  apellido: "MOli",
};

ReactDOM.render(
  <React.StrictMode>
    {/*     <Persona persona={obj} /> */}
    {/* <CountClick /> */}
    {/* <ListarPersonas /> */}
    <CrearPersona />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
