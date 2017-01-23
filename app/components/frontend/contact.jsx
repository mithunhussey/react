import React, { Component } from 'react';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Contact</h1>
      </div>
    );
  }
}
