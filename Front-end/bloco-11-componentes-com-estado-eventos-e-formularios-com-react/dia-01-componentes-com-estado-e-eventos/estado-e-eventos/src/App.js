import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      numeroDeCliques: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.botao1 = this.botao1.bind(this);
    this.botao2 = this.botao2.bind(this);
    this.botao3 = this.botao3.bind(this);
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  botao1(param) {
    console.log(param);
    console.log(this);
    console.log("clicou no botão 1");
  }

  botao2() {
    console.log(this);
    console.log("clicou no botão 2");
  }

  botao3() {
    console.log(this);
    console.log("clicou no botão 3");
  }

  render() {
    return (
      <div className='App'>
        <button onClick={() => this.botao1('ola, sou um parametro, e fui clicado')}>botão 1</button>
        <button onClick={this.botao2}>botão 2</button>
        <button onClick={this.botao3}>botão 3</button>
        <button
          onClick={this.handleClick}
        >{`Botão com evento de click ${this.state.numeroDeCliques}`}</button>
      </div>
    );
  }
}
