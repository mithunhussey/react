import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Dashboard page</h1>
      </div>
    );
  }
}
