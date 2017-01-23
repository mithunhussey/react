import React, { Component } from 'react';

export default class AddNewSite extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }
  render() {
    return (
      <div className="home">
        <h1>AddNewSite</h1>
      </div>
    );
  }
}
