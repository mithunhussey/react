import React, { Component } from 'react';
import { Form, Input, InputNumber, Alert, Radio, Select, Row, Col, Button, message } from 'antd';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';
import { FormattedMessage, FormattedHTMLMessage, defineMessages, intlShape, injectIntl } from 'react-intl';

import Girl from './../../images/vector_woman.png';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const translations = defineMessages({
  partnerInfoTitle: {
    id: 'partnerInfo.title',
    defaultMessage: '<b>Reach, engage</b> and <b>transact</b> with chinese tourists',
    description: '<b>Reach, engage</b> and <b>transact</b> with chinese tourists',
  },
  partnerInfoLoadMessage: {
    id: 'partnerInfo.load.message',
    defaultMessage: 'Congratulations on your decision to be part of the worlds fastest growing market, the outbound Chinese tourist. We would like to step you through a few easy steps to help you choose the plan that is right for you.',
    description: 'Congratulations on your decision to be part of the worlds fastest growing market, the outbound Chinese tourist. We would like to step you through a few easy steps to help you choose the plan that is right for you.',
  },
  partnerInfoSubTitle: {
    id: 'partnerInfo.subtitle',
    defaultMessage: 'Let\'s Start with some of the basics',
    description: 'Let\'s Start with some of the basics',
  },
  partnerInfoLabelLocation: {
    id: 'partnerInfo.bussiness.location',
    defaultMessage: 'Where is your business located?',
    description: 'Where is your business located?',
  },
  partnerInfoLabelBName: {
    id: 'partnerInfo.bussiness.name',
    defaultMessage: 'What is your business name',
    description: 'What is your business name',
  },
  partnerInfoPlaceholderBName: {
    id: 'partnerInfo.bussiness.placeholder.name',
    defaultMessage: 'Freffy\'s BBQ Joint',
    description: 'Freffy\'s BBQ Joint',
  },
  partnerInfoTipBName: {
    id: 'partnerInfo.bussiness.tip.name',
    defaultMessage: 'Tip: If you have more than one business, you can always add later',
    description: 'Tip: If you have more than one business, you can always add later',
  },
  partnerInfoBNameError: {
    id: 'partnerInfo.bussiness.error.name',
    defaultMessage: 'Please provide your Business Name!',
    description: 'Please provide your Business Name!',
  },
  partnerInfoMobile: {
    id: 'partnerInfo.bussiness.mobile',
    defaultMessage: 'Business or Mobile Number',
    description: 'Business or Mobile Number',
  },
  partnerInfoMobileError: {
    id: 'partnerInfo.bussiness.mobile.error',
    defaultMessage: 'Please input your Business or Mobile Number!',
    description: 'Please input your Business or Mobile Number!',
  },
  partnerInfoLabelBType: {
    id: 'partnerInfo.bussiness.btype',
    defaultMessage: 'What best descibes your type of business',
    description: 'What best descibes your type of business',
  },
  partnerInfoFB: {
    id: 'partnerInfo.bussiness.btype.fb',
    defaultMessage: 'Food & Beverage',
    description: 'Food & Beverage',
  },
  partnerInfoRetail: {
    id: 'partnerInfo.bussiness.btype.retail',
    defaultMessage: 'Retail, Service & Shopping',
    description: 'Retail, Service & Shopping',
  },
  partnerInfoAttraction: {
    id: 'partnerInfo.bussiness.btype.attraction',
    defaultMessage: 'Attraction or Experience',
    description: 'Attraction or Experience',
  },
  partnerInfoNbSite: {
    id: 'partnerInfo.bussiness.nbSite',
    defaultMessage: 'Number of sites you would like to market',
    description: 'Number of sites you would like to market',
  },
  partnerInfoTipNbSite: {
    id: 'partnerInfo.bussiness.nbSite.tip',
    defaultMessage: 'TIP: uwai.com is a map based service to allow Chinese tourists to find you easily.  Each location you would like to market must be individually listed',
    description: 'TIP: uwai.com is a map based service to allow Chinese tourists to find you easily.  Each location you would like to market must be individually listed',
  },
  partnerInfoButton: {
    id: 'partnerInfo.bussiness.button.next',
    defaultMessage: 'Next',
    description: 'Next',
  },
  invalidServerResponse: {
    id: 'partnerInfo.invalidResponse',
    defaultMessage: 'Invalid Server Response!',
    description: 'Invalid Server Response!',
  },
  invalidForm: {
    id: 'partnerInfo.invalidForm',
    defaultMessage: 'Please fix the errors below.',
    description: 'Please fix the errors below.',
  },
});

const countryData = ['C1', 'C2'];
const stateData = { C1: ['S11', 'S12', 'S13'], C2: ['S21', 'S22', 'S33'] };

const cityData = { S11: ['C111', 'C112', 'C113', 'C114'], S12: ['C121', 'C122', 'C123', 'C124'], S13: ['C131', 'C132', 'C133', 'C134'], S21: ['C211', 'C212', 'C213', 'C214'], S22: ['C221', 'C222', 'C223', 'C224'], S23: ['C231', 'C232', 'C233', 'C234'] };

class SignUpPartnerForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCountryChange = this.onCountryChange.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
    this.radioBusinessType = this.radioBusinessType.bind(this);

    this.state = {
      status: 'notLoggedIn',
      country: countryData[0],
      selectCountry: countryData[0],
      states: stateData[countryData[0]],
      selectState: stateData[countryData[0]][0],
      cities: cityData[stateData[countryData[0]][0]],
      selectCity: cityData[stateData[countryData[0]][0]][0],
      bussinessType: 'F&B',
    };
  }

  componentDidMount() {
    message.success(this.props.intl.formatMessage(translations.partnerInfoLoadMessage), 10);
  }

  onCountryChange(value) {
    this.setState(
      {
        selectCountry: value,
        states: stateData[value],
        selectState: stateData[value][0],
        cities: cityData[stateData[value][0]],
        selectCity: cityData[stateData[value][0]][0],
      },
    );
  }

  onStateChange(value) {
    this.setState(
      {
        cities: cityData[value],
        selectCity: cityData[value][0],
      },
    );
  }

  onCityChange(value) {
    this.setState(
      {
        selectCity: value,
      },
    );
  }

  radioBusinessType(e) {
    this.setState(
      {
        bussinessType: e.target.value,
      },
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          status: 'loggingIn',
        });

        const finalParms = {
          businessName: values.businessName,
          mobile: values.mobile,
          nbSites: values.nbSites,
          businessType: this.state.bussinessType,
          country: this.state.selectCountry,
          state: this.state.selectState,
          city: this.state.selectCity,
        };

        cookie.save('userInfo', finalParms, { path: '/' });
        if (finalParms.businessType === 'F&B') {
          hashHistory.push('/onboarding/subscription-fab');
        } else if (finalParms.businessType === 'AOE') {
          hashHistory.push('/onboarding/subscription-attraction');
        } else if (finalParms.businessType === 'RET') {
          hashHistory.push('/onboarding/subscription-retail');
        }
      } else {
        this.setState({
          status: 'invalidForm',
        });
      }
    });
  }

  renderAlert() {
    let rAlert = '';
    if (this.state.status === 'loginError') {
      rAlert = (<Alert
        message={<FormattedHTMLMessage {...translations.invalidServerResponse} />}
        type="error"
        showIcon
      />);
    } else if (this.state.status === 'invalidForm') {
      rAlert = (<Alert
        message={<FormattedHTMLMessage {...translations.invalidForm} />}
        type="warning"
        showIcon
      />);
    }
    return rAlert;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const countryOptions = countryData.map(
      countryInfo => <Option key={countryInfo}>{countryInfo}</Option>,
    );
    const stateOptions = this.state.states.map(
      stateInfo => <Option key={stateInfo}>{stateInfo}</Option>,
    );
    const cityOptions = this.state.cities.map(
      cityInfo => <Option key={cityInfo}>{cityInfo}</Option>,
    );

    return (
      <div>
        <Row type="flex" justify="center" align="middle" className="sp-partner-form">
          <Col span={18}>
            <h2 className="partner-signup-title">
              <FormattedHTMLMessage {...translations.partnerInfoTitle} />
            </h2>
            <p className="partner-form-instr">
              <FormattedHTMLMessage {...translations.partnerInfoSubTitle} />
            </p>
            <Row type="flex" justify="start">
              <Col span={22}>
                <Form onSubmit={this.handleSubmit} className="sign-up-business-form">
                  <Row type="flex" justify="center" align="middle" >
                    <Col span={24}>
                      { this.renderAlert() }
                    </Col>
                  </Row>
                  <Row type="flex" justify="center" align="middle" >
                    <Col span={24}>
                      <FormItem
                        label={<FormattedMessage {...translations.partnerInfoLabelLocation} />}
                      >
                        { getFieldDecorator('location')(
                          <div>
                            <div className="sign-up-select">
                              <Select defaultValue={countryData[0]} onChange={this.onCountryChange}>
                                {countryOptions}
                              </Select>
                            </div>
                            <div className="sign-up-select">
                              <Select value={this.state.selectState} onChange={this.onStateChange}>
                                {stateOptions}
                              </Select>
                            </div>
                            <div className="sign-up-select">
                              <Select name="location" value={this.state.selectCity} onChange={this.onCityChange}>
                                {cityOptions}
                              </Select>
                            </div>
                          </div>,
                         ) }
                      </FormItem>
                    </Col>
                  </Row>
                  <Row type="flex" justify="start" align="middle" >
                    <Col span={16}>
                      <FormItem
                        label={<FormattedMessage {...translations.partnerInfoLabelBName} />}
                        extra={<FormattedMessage {...translations.partnerInfoTipBName} />}
                      >
                        { getFieldDecorator('businessName', {
                          rules: [{
                            required: true,
                            message: this.props.intl.formatMessage(
                              translations.partnerInfoBNameError,
                            ),
                          }],
                        })(
                          <Input
                            placeholder={
                              this.props.intl.formatMessage(
                                translations.partnerInfoPlaceholderBName,
                              )
                            }
                          />,
                        ) }
                      </FormItem>
                    </Col>
                  </Row>
                  <Row type="flex" justify="start" align="middle" >
                    <Col span={12}>
                      <FormItem label={<FormattedMessage {...translations.partnerInfoMobile} />}>
                        { getFieldDecorator('mobile',
                          {
                            rules: [
                              {
                                required: true,
                                message: this.props.intl.formatMessage(
                                  translations.partnerInfoMobileError,
                                ),
                              },
                            ],
                          },
                        )(
                          <Input addonBefore={'+61'} placeholder="" />,
                        ) }
                      </FormItem>
                    </Col>
                  </Row>
                  <Row type="flex" justify="center" align="middle" >
                    <Col span={24}>
                      <FormItem
                        label={
                          <FormattedMessage {...translations.partnerInfoLabelBType} />
                        }
                      >
                        { getFieldDecorator('bussinessType')(
                          <div>
                            <RadioGroup name="bussinessType" defaultValue={this.state.bussinessType} size="large" onChange={this.radioBusinessType}>
                              <RadioButton value="F&B">
                                <FormattedMessage {...translations.partnerInfoFB} />
                              </RadioButton>
                              <RadioButton value="RET">
                                <FormattedMessage {...translations.partnerInfoRetail} />
                              </RadioButton>
                              <RadioButton value="AOE">
                                <FormattedMessage {...translations.partnerInfoAttraction} />
                              </RadioButton>
                            </RadioGroup>
                          </div>,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row type="flex" justify="start" align="middle">
                    <Col span={24} className="sign-partner-nbsite">
                      <FormItem
                        label={<FormattedMessage {...translations.partnerInfoNbSite} />}
                        help={<FormattedMessage {...translations.partnerInfoTipNbSite} />}
                      >
                        {getFieldDecorator('nbSites', {
                          initialValue: 1,
                          rules: [{ required: true, message: 'Please input Number of site!' }],
                        })(
                          <InputNumber min={1} max={10} />,
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row type="flex" justify="center" align="middle" >
                    <Col span={24}>
                      <FormItem className="partner-button-left">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                          <FormattedMessage {...translations.partnerInfoButton} />
                        </Button>
                      </FormItem>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col span={6} className="girl-image-col">
            <Row type="flex" align="top" className="girl-image-signpartner">
              <img role="presentation" src={Girl} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

SignUpPartnerForm.propTypes = {
  form: React.PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

const SignUpPartner = Form.create()(injectIntl(SignUpPartnerForm));

export default SignUpPartner;
