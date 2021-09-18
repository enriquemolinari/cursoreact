import React, { Component } from "react";

export default class TestAPIForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      inputsValue: { nombre: "", apellido: "", direccion: "", telefono: "" },
      loading: false,
      resultado: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:1234/personas", {
      method: "POST",
      body: JSON.stringify({
        nombre: this.state.inputsValue.nombre,
        apellido: this.state.inputsValue.apellido,
        direccion: this.state.inputsValue.direccion,
        telefonos: [this.state.inputsValue.telefono],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.result !== "success") {
          this.setState({
            resultado: json.message,
          });
          return;
        }
        this.setState({
          inputsValue: {
            nombre: "",
            apellido: "",
            direccion: "",
            telefono: "",
          },

          resultado: "Persona creada con éxito!",
        });
      });
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState((state) => ({
      inputsValue: { ...state.inputsValue, [name]: value },
    }));
  };

  render() {
    return (
      <div>
        <form>
          <label>
            Nombre
            <input
              type="text"
              name="nombre"
              onChange={this.handleChange}
              value={this.state.inputsValue.nombre}
            />
          </label>
          <label>
            Apellido
            <input
              type="text"
              name="apellido"
              onChange={this.handleChange}
              value={this.state.inputsValue.apellido}
            />
          </label>
          <label>
            Direccion
            <input
              type="text"
              name="direccion"
              onChange={this.handleChange}
              value={this.state.inputsValue.direccion}
            />
          </label>
          <label>
            Telefono
            <input
              type="text"
              name="telefono"
              onChange={this.handleChange}
              value={this.state.inputsValue.telefono}
            />
          </label>
          <button onClick={this.handleSubmit} type="submit">
            Enviar
          </button>
        </form>
        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
