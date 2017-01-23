import React, { Component } from 'react';

export default class Boom extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="home">
        <h1 id="red">Boom</h1>
      </div>
    );
  }
}
