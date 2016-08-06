import '../assets/stylesheets/base.scss';
import React, { Component } from 'react';

const Hello = React.createClass({
  render() {
    return(
      <h1>perrito mio, como se topa {this.props.name}!</h1>
    )
  }
});

export default Hello;