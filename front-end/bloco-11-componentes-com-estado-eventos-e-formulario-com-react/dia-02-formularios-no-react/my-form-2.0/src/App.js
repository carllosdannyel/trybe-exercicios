import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";

export default class App extends Component {
  state = {
    name: "",
    email: "",
    cpf: "",
    endereco: "",
    cidade: "",
    estado: "",
    casa: "",
    apartamento: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ [name]: value })
  }

  render() {
    const {
      name,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      casa,
      apartamento,
    } = this.state;

    return (
      <div className="App">
        <Form
          name={name}
          email={email}
          cpf={cpf}
          endereco={endereco}
          cidade={cidade}
          estado={estado}
          casa={casa}
          apartamento={apartamento}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
