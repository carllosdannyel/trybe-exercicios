import React, { Component } from "react";
import PropTypes from 'prop-types'

export default class Album extends Component {
  render() {
    const { image, title, releaseDate: { year, month, day }, others: { recordCompany, formats } } = this.props.album
    return (
      <section>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{year}</p>
        <p>
          Lançamento:
          {`${day}/${month}/${year}`}
        </p>
        <p>Gravadora: {recordCompany}</p>
        <p>Formatos: {formats}</p>
      </section>
    );
  }
}

Album.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  releaseDate: PropTypes.shape({
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
  }),
  others: PropTypes.shape({
    recordCompany: PropTypes.string,
    formats: PropTypes.string,
  })
}