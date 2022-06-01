import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { type } = this.props;
    return <button type={type}>Enviar</button>;
  }
}
