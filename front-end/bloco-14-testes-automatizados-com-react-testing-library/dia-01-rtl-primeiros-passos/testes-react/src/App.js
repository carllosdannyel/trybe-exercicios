import React, { Component } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  state = {
    email: '',
    saveEmail: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleClick = ({ target }) => {
    const { email } = this.state;
    const { value } = target;
    if (value === 'Enviar') {
      this.setState({ email: '', saveEmail: email });
    } else this.setState({ email: '', saveEmail: '' });
  };

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label>
          Email
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <input
          data-testid="id-send"
          type="button"
          value="Enviar"
          onClick={this.handleClick}
        />
        <input type="button" value="Voltar" onClick={this.handleClick} />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
