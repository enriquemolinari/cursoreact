import React, { Component } from "react";
import "./Persona.css";

export default class Persona extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.valor = "Esto es importante";
  }

  handleClick(e) {
    e.preventDefault();
    console.log("se clickio...: " + this.valor);
  }

  render() {
    return (
      <>
        <a href="#" onMouseOver={this.handleClick} onClick={this.handleClick}>
          Este es el Link
        </a>

        <div>
          <p className="estilo">
            {this.props.persona.nombre + " - " + this.props.persona.apellido}
          </p>
        </div>
      </>
    );
  }
}
