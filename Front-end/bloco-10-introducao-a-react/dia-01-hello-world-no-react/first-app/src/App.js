import React, { Component } from "react";
import "./App.css";

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

    return <ul>{tarefas.map((tarefa) => Task(tarefa))}</ul>;
  }
}
