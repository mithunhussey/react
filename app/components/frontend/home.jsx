import React, { Component } from 'react';
import { Button } from 'antd';
import { hashHistory } from 'react-router';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.redirectPartner = this.redirectPartner.bind(this);
    this.setState({
      nblocation: 0,
    });
  }

  redirectPartner() {
    hashHistory.push('/onboarding');
  }

  render() {
    return (
      <div className="home align-center">
        <Button onClick={this.redirectPartner}>Partner with Us</Button>
      </div>
    );
  }
}
