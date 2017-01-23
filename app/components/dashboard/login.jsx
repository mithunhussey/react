import React, { Component } from 'react';
import { Col, Row } from 'antd';
import LoginForm from './../../containers/loginForm';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="middle" className="header">
          <Col span={12}>
            <h2 className="login-heading">Log in to Uwai</h2>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle">
          <Col span={6}>
            <LoginForm />
          </Col>
        </Row>
      </div>
    );
  }
}
