import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { label, type, name, value, onChange, placeholder } = this.props;

    return (
      <div>
        <label htmlFor={name}>
          {`${label} `}
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required
          />
        </label>
      </div>
    );
  }
}
