import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";

export default class App extends Component {
  render() {

    const Task = (value) => {
      return <li key={value}>{value}</li>;
    };

    const tarefas = [
      "Acordar",
      "Tomar café",
      "Escovar os dentes",
      "Ir trabalhar",
    ];

    return (
      <div className="App">
        <Header />
        <ul className="unorderedList">{tarefas.map((tarefa) => Task(tarefa))}</ul>
        <hr />
        <Content />
      </div>
    )
  }
}
