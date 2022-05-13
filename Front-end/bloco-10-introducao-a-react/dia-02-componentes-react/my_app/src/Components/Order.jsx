// arquivo Order.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Order extends Component {
  render() {
    const { user, product, price: { value, currency } } = this.props.order;

    return (
      <div className="order">
        <p> {user} bought {product} for {value} {currency} </p>
      </div>
    );
  }
}

Order.propTypes = {
  user: PropTypes.string,
  product: PropTypes.string,
  price: PropTypes.shape({
    value: PropTypes.number,
    currency: PropTypes.string,
  })
}
