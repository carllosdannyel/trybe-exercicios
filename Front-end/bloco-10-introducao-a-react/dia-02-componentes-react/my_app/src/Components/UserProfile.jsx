// arquivo UserProfile.js
import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

export default class UserProfile extends React.Component {
  render() {
    const { name, email, avatar } = this.props.user

    return (
      <div>
        <p> {name} </p>
        <p> {email} </p>
        <Image source={avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
}