import React, { Component } from "react";

export default class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: "High Order Functions",
        bloco: 8,
        status: "Aprendido",
      },
      {
        conteudo: "Composicao de Componentes",
        bloco: 11,
        status: "Aprendendo",
      },
      {
        conteudo: "Composicao de Estados",
        bloco: 12,
        status: "Aprenderei",
      },
      {
        conteudo: "Redux",
        bloco: 16,
        status: "Aprenderei",
      },
    ];

    return (
      <div>
        {conteudos.map(({ conteudo, bloco, status }) => (
          <div>
            <p>{`O conteúdo é: ${conteudo}`}</p>
            <p>{`Status: ${status}`}</p>
            <p>{`Bloco: ${bloco}`}</p>
          </div>
        ))}
      </div>
    );
  }
}
