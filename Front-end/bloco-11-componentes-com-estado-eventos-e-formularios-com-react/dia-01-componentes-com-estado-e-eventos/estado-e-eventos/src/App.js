import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  // chamando a função constructor para ser executada antes da função render
  constructor() {
    super();

    // startando o estado com alguns valores iniciais
    this.state = {
      cor0: "",
      cor1: "",
      cor2: "",
      cor3: "",
      botao0: 0,
      botao1: 0,
      botao2: 0,
      botao3: 0,
    };

    // dando visibilidade ao objeto this as funções que estão dentro da classe App
    this.handleClick = this.handleClick.bind(this);
    this.botao1 = this.botao1.bind(this);
    this.botao2 = this.botao2.bind(this);
    this.botao3 = this.botao3.bind(this);
  }

  // faz a ligação do estado anterior de uma propriedade do estado criando uma lógica de incrementação
  handleClick() {
    this.setState((estadoAnterior) => ({
      botao0: estadoAnterior.botao0 + 1,
      cor0: estadoAnterior.botao0 % 2 === 0 ? "green" : "red",
    }));
  }

  // faz a ligação do estado anterior de uma propriedade do estado criando uma lógica de incrementação
  botao1() {
    this.setState((estadoAnterior) => ({
      botao1: estadoAnterior.botao1 + 1,
      cor1: estadoAnterior.botao1 % 2 === 0 ? "yellow" : "pink",
    }));
  }

  // faz a ligação do estado anterior de uma propriedade do estado criando uma lógica de incrementação
  botao2() {
    this.setState((estadoAnterior) => ({
      botao2: estadoAnterior.botao2 + 1,
      cor2: estadoAnterior.botao2 % 2 === 0 ? "blue" : "grey",
    }));
  }

  // faz a ligação do estado anterior de uma propriedade do estado criando uma lógica de incrementação
  botao3() {
    this.setState((estadoAnterior) => ({
      botao3: estadoAnterior.botao3 + 1,
      cor3: estadoAnterior.botao3 % 2 === 0 ? "purple" : "brown",
    }));
  }

  // renderiza toda a lógica dentro dela na tela
  render() {
    // destructuring das propriedades do state
    const { cor0, cor1, cor2, cor3, botao0, botao1, botao2, botao3 } =
      this.state;
    return (
      // Funções que tratam eventos devem ser vinculadas aos seus respectivos elementos com {this.minhaFuncao} ou {() => this.minhaFuncao('Meu parametro').
      <>
        <h1>Handle Click</h1>
        <div className='App'>
          <button
            onClick={this.botao1}
            style={{ backgroundColor: cor1 }}
          >{`botão ${botao1}`}</button>
          <button
            onClick={this.botao2}
            style={{ backgroundColor: cor2 }}
          >{`botão ${botao2}`}</button>
          <button
            onClick={this.botao3}
            style={{ backgroundColor: cor3 }}
          >{`botão ${botao3}`}</button>
          <button
            onClick={this.handleClick}
            style={{ backgroundColor: cor0 }}
          >{`Botão ${botao0}`}</button>
        </div>
      </>
    );
  }
}
