import React, { Component } from 'react';
import { Form, Input, InputNumber, Button, Row, Col, Card } from 'antd';
import cookie from 'react-cookie';
import { hashHistory } from 'react-router';
import { FormattedMessage, defineMessages, intlShape, injectIntl } from 'react-intl';

import girl from './../../images/vector_woman.png';

const FormItem = Form.Item;
const FormAlign = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };

const translations = defineMessages({
  recommendTitle: {
    id: 'attraction.recommend.title',
    defaultMessage: 'Recommended Plan',
    description: 'Recommended Plan',
  },
  recommendSubTitle: {
    id: 'attraction.recommend.subTitle',
    defaultMessage: 'Based on the information provided to us, we recommend the following plan for you. It is all you need to get started',
    description: 'Based on the information provided to us, we recommend the following plan for you. It is all you need to get started',
  },
  recommendPlanTitle: {
    id: 'attraction.recommend.planTitle',
    defaultMessage: 'Recommended Plan for you',
    description: 'Recommended Plan for you',
  },
  labelBusiness: {
    id: 'attraction.recommend.label.business',
    defaultMessage: 'Business Type',
    description: 'Business Type',
  },
  labelNbLocation: {
    id: 'attraction.recommend.label.nbLocation',
    defaultMessage: 'Number of Locations',
    description: 'Number of Locations',
  },
  labelPricePerLocationPerMonth: {
    id: 'attraction.recommend.label.pricePerLocationPerMonth',
    defaultMessage: 'Price per location per month',
    description: 'Price per location per month',
  },
  labelPaymentTerms: {
    id: 'attraction.recommend.label.paymentTerms',
    defaultMessage: 'Payment Terms',
    description: 'Payment Terms',
  },
  labelOneTimeSetupFee: {
    id: 'attraction.recommend.label.oneTimeSetupFee',
    defaultMessage: 'One time set up fee',
    description: 'One time set up fee',
  },
  labelTotalAnnualPlan: {
    id: 'attraction.recommend.label.totalAnnualPlan',
    defaultMessage: 'Total annual plan',
    description: 'Total annual plan',
  },
  buttonProceedPayment: {
    id: 'attraction.recommend.button.proceedPayment',
    defaultMessage: 'Proceed to payment',
    description: 'Proceed to payment',
  },
  cardTouristSees: {
    id: 'attraction.recommend.card.touristSees',
    defaultMessage: 'Chinese tourist sees',
    description: 'Chinese tourist sees',
  },
  cardYouReceive: {
    id: 'attraction.recommend.card.youReceive',
    defaultMessage: 'You Receive',
    description: 'You Receive',
  },
});


class SubscriptionAttractionForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeLocationNumber = this.changeLocationNumber.bind(this);
  }

  componentWillMount() {
    const userInfo = cookie.load('userInfo');
    const nbLocation = userInfo.nbSites;
    const pricePerLocPerMonth = 20;
    const oneTimeSetupFee = 100;
    const period = 12;

    this.state = {
      nbLocation,
      pricePerLocPerMonth,
      oneTimeSetupFee,
      period,
      finalBill: (nbLocation * period * pricePerLocPerMonth) + oneTimeSetupFee,
    };
  }

  changeLocationNumber(value) {
    this.setState({
      nbLocation: value,
      finalBill: (value * this.state.period * this.state.pricePerLocPerMonth)
      + this.state.oneTimeSetupFee,
    });
  }

  handleSubmit() {
    hashHistory.push('/onboarding/subscription-payment');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Row type="flex" align="middle" justify="center">
          <Col span={18} className="recommended-plan-left">
            <Row type="flex" align="middle" justify="center">
              <Col span={22} className="sub-recom-fab-left">
                <Row type="flex" align="middle" justify="center" className="left-form-pay">
                  <h2 className="sub-recom-title">
                    <FormattedMessage {...translations.recommendTitle} />
                  </h2>
                  <p className="sub-recom-subtitle">
                    <FormattedMessage {...translations.recommendSubTitle} />
                  </p>
                  <Form onSubmit={this.handleSubmit} className="form-subscriptionFab">
                    <Row type="flex" align="middle" justify="center">
                      <Col className="your-plan-title" span={24}>
                        <h4>
                          <FormattedMessage {...translations.recommendPlanTitle} />
                        </h4>
                      </Col>
                    </Row>
                    <Row type="flex" align="middle" justify="center">
                      <Col span={24} className="rec-plan-rate">
                        <Row type="flex" align="middle" justify="center">
                          <p className="sub-left-plan-name">Uwai Attraction Plan</p>
                          <p className="sub-left-plan-value">only $3.20 / day / site</p>
                        </Row>
                      </Col>
                    </Row>
                    <Row type="flex" align="middle" justify="center">
                      <Col span={24} className="plan-detail-subscr">
                        <Row type="flex" align="middle" justify="center">
                          <Col span={12} className="m-view">
                            <Row type="flex" align="middle" justify="start">
                              <FormItem
                                label={this.props.intl.formatMessage(translations.labelBusiness)}
                                {...FormAlign}
                              >
                                { getFieldDecorator('business_type', { initialValue: 'Attraction' })(
                                  <Input disabled />,
                                )}
                              </FormItem>
                            </Row>
                          </Col>
                          <Col span={12} className="m-view">
                            <Row type="flex" align="middle" justify="start">
                              <FormItem
                                label={this.props.intl.formatMessage(translations.labelNbLocation)}
                                {...FormAlign}
                              >
                                { getFieldDecorator('nbLocation', {
                                  initialValue: this.state.nbLocation })(
                                    <InputNumber
                                      min={1}
                                      max={10}
                                      onChange={this.changeLocationNumber}
                                    />,
                                )}
                              </FormItem>
                            </Row>
                          </Col>
                        </Row>
                        <Row type="flex" align="middle" justify="center">
                          <Col span={12} className="m-view">
                            <Row type="flex" align="middle" justify="start">
                              <FormItem
                                label={
                                  this.props.intl.formatMessage(
                                    translations.labelPricePerLocationPerMonth,
                                  )
                                }
                                {...FormAlign}
                              >
                                { getFieldDecorator('pplp_month', {
                                  initialValue: `USD$ ${this.state.pricePerLocPerMonth}` })(
                                    <Input disabled />,
                                )}
                              </FormItem>
                            </Row>
                          </Col>
                          <Col span={12} className="m-view">
                            <Row type="flex" align="middle" justify="start">
                              <FormItem
                                label={
                                  this.props.intl.formatMessage(translations.labelPaymentTerms)
                                }
                                {...FormAlign}
                              >
                                { getFieldDecorator('payment_terms', {
                                  initialValue: 'Paid Annually' })(
                                    <Input disabled />,
                                )}
                              </FormItem>
                            </Row>
                          </Col>
                        </Row>
                        <Row type="flex" align="middle" justify="center">
                          <Col span={12} className="m-view">
                            <Row type="flex" align="middle" justify="start">
                              <FormItem
                                label={
                                  this.props.intl.formatMessage(translations.labelOneTimeSetupFee)
                                }
                                {...FormAlign}
                              >
                                { getFieldDecorator('oneTimeSetupFee', {
                                  initialValue: `USD$ ${this.state.oneTimeSetupFee}` })(
                                    <Input disabled />,
                                )}
                              </FormItem>
                            </Row>
                          </Col>
                          <Col span={12} className="m-view">
                            <Row type="flex" align="middle" justify="start">
                              <FormItem
                                label={
                                  this.props.intl.formatMessage(translations.labelTotalAnnualPlan)
                                }
                                {...FormAlign}
                              >
                                { getFieldDecorator('total_annual_plan', {
                                  initialValue: `USD$ ${this.state.finalBill}` })(
                                    <Input disabled />,
                                )}
                              </FormItem>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row type="flex" align="middle" justify="center" className="subsc-button">
                      <Col span={24}>
                        <Row type="flex" align="middle" justify="center">
                          <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                              <FormattedMessage {...translations.buttonProceedPayment} />
                            </Button>
                          </FormItem>
                        </Row>
                      </Col>
                    </Row>
                  </Form>
                </Row>
                <Row type="flex" align="middle" justify="center" className="cardHolderFab">
                  <Col span={24} className="card-holder">
                    <Card title={this.props.intl.formatMessage(translations.cardTouristSees)} >
                      <ul>
                        <li>
                          <p>Your business on their mobile phone</p>
                        </li>
                        <li>
                          <p>Recommendations and reviews</p>
                        </li>
                        <li>
                          <p>Ability to scan your QR code to find out about you and
                           your menu offering,
                           helping them to choose you</p>
                        </li>
                        <li>
                          <p>Ability to share your venue with their friends</p>
                        </li>
                        <li>
                          <p>Ability to select items for order to
                           show your team to make
                           ordering easy and straight forward</p>
                        </li>
                        <li>
                          <p>Ability to know what payment methods you take,
                           particularly important for Chinese tourists.</p>
                        </li>
                        <li>
                          <p>A wonderful local experience</p>
                        </li>
                      </ul>
                    </Card>
                  </Col>
                  <Col span={24} className="card-holder">
                    <Card title={this.props.intl.formatMessage(translations.cardYouReceive)} >
                      <ul>
                        <li>
                          <p>Your business on their mobile phone</p>
                        </li>
                        <li>
                          <p>Recommendations and reviews</p>
                        </li>
                        <li>
                          <p>Ability to scan your QR code to find out about you and
                           your menu offering, helping them to choose you</p>
                        </li>
                        <li>
                          <p>Ability to share your venue with their friends</p>
                        </li>
                        <li>
                          <p>Ability to select items for order to show your team
                           to make ordering easy and straight forward</p>
                        </li>
                        <li>
                          <p>Ability to know what payment methods you take,
                           particularly important for Chinese tourists.</p>
                        </li>
                        <li>
                          <p>A wonderful local experience</p>
                        </li>
                      </ul>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={6} className="recommended-plan-right">
            <Row type="flex" align="top" className="girl-image">
              <img alt="girl" src={girl} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}


SubscriptionAttractionForm.propTypes = {
  form: React.PropTypes.string,
  intl: intlShape.isRequired,
};

const SubscriptionAttraction = Form.create()(injectIntl(SubscriptionAttractionForm));

export default SubscriptionAttraction;
