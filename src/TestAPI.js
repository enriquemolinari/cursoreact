import React, { Component } from "react";

export default class TestAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      personas: [],
    };

    this.traerPersonas = this.traerPersonas.bind(this);
  }

  traerPersonas() {
    fetch("http://localhost:1234/personas")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          personas: json.personas,
          data: true,
        });
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.traerPersonas}>Listas Personas</button>
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
