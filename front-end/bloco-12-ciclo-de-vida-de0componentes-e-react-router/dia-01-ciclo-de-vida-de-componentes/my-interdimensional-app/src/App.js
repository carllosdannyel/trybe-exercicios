// App.js
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount = async () => {
    const request = await fetch("https://rickandmortyapi.com/api/character");
    const response = await request.json();
    this.setState({ characters: response.results });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Ricky and Morty Characters:</h1>
        <div className="body">
          {characters.map(({ name, image }) => (
            <div className="container" key={name}>
              <h3>{name}</h3>
              <img src={image} alt={name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
