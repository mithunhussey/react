import React, { Component } from 'react';

export default class Terms extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Terms</h1>
      </div>
    );
  }
}
