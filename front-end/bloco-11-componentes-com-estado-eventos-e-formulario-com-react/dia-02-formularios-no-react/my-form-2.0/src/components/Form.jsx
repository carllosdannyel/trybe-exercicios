import React, { Component } from "react";
import Button from "./Button";
import Input from "./Input";

export default class Form extends Component {
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
      onChange,
    } = this.props;

    return (
      <>
        <h1>Preencha o Formulário</h1>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <Input
              label="Nome:"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Digite seu nome"
            />

            <Input
              label="Email:"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Digite seu email"
            />

            <Input
              label="Cpf:"
              type="text"
              name="cpf"
              value={cpf}
              onChange={onChange}
              placeholder="Digite seu cpf"
            />

            <Input
              label="Endereço:"
              type="text"
              name="endereco"
              value={endereco}
              onChange={onChange}
              placeholder="Digite seu endereço"
            />

            <Input
              label="Cidade:"
              type="text"
              name="cidade"
              value={cidade}
              onChange={onChange}
              placeholder="Digite sua cidade"
            />

            <Input
              label="Estado:"
              type="combo"
              name="estado"
              value={estado}
              onChange={onChange}
              placeholder="Digite seu estado"
            />

            <Input
              label="Casa"
              type="radio"
              name="radio"
              value={casa}
              onChange={onChange}
            />

            <Input
              label="Apartamento"
              type="radio"
              name="radio"
              value={apartamento}
              onChange={onChange}
            />

            <Button type="submit" />
          </fieldset>
        </form>
      </>
    );
  }
}
