import React, { Component } from "react";

export default class ListarPersonas extends Component {
  constructor(props) {
    super(props);
    this.limpiar = this.limpiar.bind(this);
    this.listarPersonas = this.listarPersonas.bind(this);

    this.state = {
      personas: [],
    };
  }

  listarPersonas() {
    fetch("http://localhost:1234/personas")
      .then((resp) => resp.json())
      .then((json) => {
        this.setState({
          personas: json.personas,
          resultado: json.result,
        });
      });
  }

  limpiar() {
    this.setState({
      personas: [],
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.listarPersonas}>Listar Personas</button>
        <button onClick={this.limpiar}>Limpiar</button>
        <hr />
        <table>
          <thead>
            <tr>
              <th>nombre</th>
              <th>apellido</th>
              <th>direccion</th>
              <th>telefonos</th>
            </tr>
          </thead>
          <tbody>
            {this.state.personas.map((p, index) => (
              <tr key={index}>
                <td>{p.nombre}</td>
                <td>{p.apellido}</td>
                <td>{p.direccion && p.direccion.direccion}</td>
                <td>{p.telefonos && p.telefonos[0].numero}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
