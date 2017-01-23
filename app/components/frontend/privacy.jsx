import React, { Component } from 'react';

export default class Privacy extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Privacy</h1>
      </div>
    );
  }
}
