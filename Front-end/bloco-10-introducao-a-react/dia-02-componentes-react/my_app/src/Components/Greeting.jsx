import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Greeting extends Component {
  render() {
    const { name } = this.props

    return <h1>Hello, {name}</h1>
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
}
