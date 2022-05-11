import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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
      <div className='App'>
        <Header />
        <hr />
        <ul className='unorderedList'>
          {tarefas.map((tarefa) => Task(tarefa))}
        </ul>
        <hr />
        <Content />
        <hr />
        <Footer />
      </div>
    );
  }
}
