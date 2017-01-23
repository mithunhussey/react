import React, { Component } from 'react';

export default class Sites extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
      pricePerLocPerMonth: 0,
      oneTimeSetupFee: 0,
      period: 0,
      finalBill: 0,
    });
  }
  render() {
    return (
      <div className="home">
        <h1>Sites</h1>
      </div>
    );
  }
}
