import React, { Component } from 'react';
import "./App.css";

function botao1() {
  console.log('clicou no botão 1')
}

function botao2() {
  console.log('clicou no botão 2')
}

function botao3() {
  console.log('clicou no botão 3')
}

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      numeroDeCliques: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={botao1}>botão 1</button>
        <button onClick={botao2}>botão 2</button>
        <button onClick={botao3}>botão 3</button>
        <button onClick={this.handleClick}>{`Botão com evento de click ${this.state.numeroDeCliques}`}</button>
      </div>
    );
  }
}
