import React, { Component } from 'react';

export default class OurApps extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>OurApps</h1>
      </div>
    );
  }
}

