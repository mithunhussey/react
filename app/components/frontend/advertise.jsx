import React, { Component } from 'react';

export default class Advertise extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Advertise</h1>
      </div>
    );
  }
}

