import React, { Component } from "react";

export default class Components extends Component {
  render() {
    const myInfo = {
      name: 'Carlos Daniel',
      age: 22,
    }
    return (
      <div>
        <h1>Meu nome é {myInfo.name} tenho {myInfo.age} anos...</h1>
        <p>Sou estudante da trybe desde o dia 14/02/2022</p>
        <p>Agora estamos no Módulo de Front-End aprendendo React</p>
      </div>
    )
  }
}
