import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  // chamando a função constructor para ser executada antes da função render
  constructor() {
    super();

    // startando o estado com alguns valores iniciais
    this.state = {
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
    this.setState((estadoAnterior, _props) => ({
      botao0: estadoAnterior.botao0 + 1,
    }));
  }

  // faz a ligação do estado anterior de uma propriedade do estado criando uma lógica de incrementação
  botao1() {
    this.setState((estadoAnterior, _props) => ({
      botao1: estadoAnterior.botao1 + 1,
    }));
  }

  // faz a ligação do estado anterior de uma propriedade do estado criando uma lógica de incrementação
  botao2() {
    this.setState((estadoAnterior, _props) => ({
      botao2: estadoAnterior.botao2 + 1,
    }));
  }

  // faz a ligação do estado anterior de uma propriedade do estado criando uma lógica de incrementação
  botao3() {
    this.setState((estadoAnterior, _props) => ({
      botao3: estadoAnterior.botao3 + 1,
    }));
  }

  // renderiza toda a lógica dentro dela na tela
  render() {
    return (
        // Funções que tratam eventos devem ser vinculadas aos seus respectivos elementos com {this.minhaFuncao} ou {() => this.minhaFuncao('Meu parametro').
      <div className='App'>
        <button onClick={this.botao1}>{`botão ${this.state.botao1}`}</button>
        <button onClick={this.botao2}>{`botão ${this.state.botao2}`}</button>
        <button onClick={this.botao3}>{`botão ${this.state.botao3}`}</button>
        <button
          onClick={this.handleClick}
        >{`Botão ${this.state.botao0}`}</button>
      </div>
    );
  }
}
