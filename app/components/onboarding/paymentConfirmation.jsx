import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'antd';
import { hashHistory } from 'react-router';
import success from './../../images/success.png';

class PaymentConfirmationForm extends Component {
  constructor(props) {
    super(props);
    this.redirectToAddFirstSite = this.redirectToAddFirstSite.bind(this);
    this.state = {
      current: 0,
    };
  }

  redirectToAddFirstSite() {
    hashHistory.push('/onboarding/add-first-site');
  }
  render() {
    return (
      <div className="confirm-page">
        <Row type="flex" align="middle" justify="center">
          <Col span="12" className="">
            <Row type="flex" align="middle" justify="center">
              <img src={success} role="presentation" />
            </Row>
            <Row type="flex" align="middle" justify="center">
              <p className="success-message">All done, you are ready to go! </p>
            </Row>
            <Row type="flex" align="middle" justify="center">
              <p className="whats-next" >What{"'"}s next? You can create your first site by clicking the {'"'}Create new site{'"'} button below, or explore Uwai by visiting dashboard.</p>
            </Row>
            <Row type="flex" align="middle" justify="center">
              <Button type="primary" onClick={this.redirectToAddFirstSite} size="large" className="create-first-site">Create your first site</Button>
            </Row>
            <Row type="flex" align="middle" justify="center">
              <p className="continue-dashboard">or <a href="/dashboard">continue to your dashboard</a></p>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const PaymentConfirmation = Form.create()(PaymentConfirmationForm);

export default PaymentConfirmation;
