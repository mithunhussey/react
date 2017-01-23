import React, { Component } from 'react';

export default class Careers extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Careers</h1>
      </div>
    );
  }
}

