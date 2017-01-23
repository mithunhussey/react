import React, { Component } from 'react';

export default class HelpAndFaq extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home">
        <h1>FAQ</h1>
      </div>
    );
  }
}

