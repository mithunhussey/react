import React, { Component } from 'react';
import { Form, Input, Modal, Alert, Icon, Row, Col, Button, Switch } from 'antd';
import { hashHistory } from 'react-router';
import { FormattedMessage, defineMessages, intlShape, injectIntl } from 'react-intl';
import Superagent from 'superagent';

const FormItem = Form.Item;

const translations = defineMessages({
  alertLinkActivated: {
    id: 'component.onboarding.signUpNamePass.alert.link_activated',
    defaultMessage: 'Your email is confirmed!',
    description: 'This translation is defined in a defineMessage.',
  },
  alertLoggingIn: {
    id: 'component.onboarding.signUpNamePass.alert.Logging_in',
    defaultMessage: 'Logging in...',
    description: 'This translation is defined in a defineMessage.',
  },
  alertErrorFix: {
    id: 'component.onboarding.signUpNamePass.alert.fix_errors',
    defaultMessage: 'Please fix the errors below.',
    description: 'This translation is defined in a defineMessage.',
  },
  setPassword: {
    id: 'component.onboarding.signUpNamePass.label.setpassword',
    defaultMessage: 'Set your password',
    description: 'Set your password',
  },
  setPasswordPlaceholder: {
    id: 'component.onboarding.signUpNamePass.placeholder.setpassword',
    defaultMessage: 'Password',
    description: 'Password',
  },
  firstName: {
    id: 'component.onboarding.signUpNamePass.label.firstname',
    defaultMessage: 'How should we call you? (Optional)',
    description: 'First Name',
  },
  firstNamePlaceholder: {
    id: 'component.onboarding.signUpNamePass.placeholder.firstname',
    defaultMessage: 'Your Name',
    description: 'Your Name',
  },
  iAgree: {
    id: 'component.onboarding.signUpNamePass.iagree',
    defaultMessage: 'Your Name',
    description: 'Your Name',
  },
  signUpButton: {
    id: 'component.onboarding.signUpNamePass.button.signup',
    defaultMessage: 'Sign Up',
    description: 'Sign Up',
  },
  termsLink: {
    id: 'component.onboarding.signUpNamePass.terms',
    defaultMessage: 'Terms of Service',
    description: 'Terms of Service',
  },
  privacyLink: {
    id: 'component.onboarding.signUpNamePass.privacy',
    defaultMessage: 'Privacy Policy',
    description: 'Privacy Policy',
  },
  errorPassword: {
    id: 'component.onboarding.signUpNamePass.error.passwd',
    defaultMessage: 'Please input your password!',
    description: 'Please input your password!',
  },
  errorAgree: {
    id: 'component.onboarding.signUpNamePass.error.agree',
    defaultMessage: 'Please agree to terms and policy!',
    description: 'Please agree to terms and policy!',
  },
});


class SignUpNamePassForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.renderAlert = this.renderAlert.bind(this);
    this.state = {
      status: 'emailLinkValidated',
      tosVisible: false,
      ppVisible: false,
    };
  }

  showModal(a) {
    const stateData = {};
    stateData[`${a}Visible`] = true;
    this.setState(stateData);
  }
  handleOk(a) {
    const stateData = {};
    stateData[`${a}Visible`] = false;
    this.setState(stateData);
  }
  handleCancel(a) {
    const stateData = {};
    stateData[`${a}Visible`] = false;
    this.setState(stateData);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Superagent.get('https://jsonplaceholder.typicode.com/posts/1')
          .send(values).end((error, res) => {
            if (res.body.id === 1) {
              hashHistory.push('/onboarding/partner-sign-up/dwaddwd');
            }
          });
      } else {
        this.setState({
          status: 'invalidForm',
        });
      }
    });
  }

  renderAlert() {
    let rAlert = '';
    if (this.state.status === 'emailLinkValidated') {
      rAlert = <Alert message={this.props.intl.formatMessage(translations.alertLinkActivated)} type="success" showIcon />;
    } else if (this.state.status === 'loggingIn') {
      rAlert = <Alert message={this.props.intl.formatMessage(translations.alertLoggingIn)} type="info" showIcon />;
    } else if (this.state.status === 'invalidForm') {
      rAlert = <Alert message={this.props.intl.formatMessage(translations.alertErrorFix)} type="warning" showIcon />;
    }
    return rAlert;
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Row type="flex" justify="center">
          <Col span={24}>
            <Row type="flex" justify="center" align="middle" className="alert-sign-pass" >
              <Col span={8}>
                {this.renderAlert()}
              </Col>
            </Row>
            <Form onSubmit={this.handleSubmit} className="sign-up-np-form">
              <Row type="flex" justify="center" align="middle" >
                <Col span={8}>
                  <FormItem label={this.props.intl.formatMessage(translations.setPassword)} >
                    { getFieldDecorator('password', {
                      rules: [{
                        required: true,
                        message: `${this.props.intl.formatMessage(translations.errorPassword)}`,
                      }],
                    })(
                      <Input
                        addonBefore={<Icon type="lock" />}
                        type="password"
                        placeholder={
                          this.props.intl.formatMessage(translations.setPasswordPlaceholder)
                        }
                      />,
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle" >
                <Col span={8}>
                  <FormItem label={<FormattedMessage {...translations.firstName} />} >
                    {getFieldDecorator('name')(
                      <Input
                        addonBefore={<Icon type="user" />}
                        placeholder={
                          this.props.intl.formatMessage(translations.firstNamePlaceholder)
                        }
                      />,
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle" >
                <Col span={8}>
                  <FormItem>
                    { getFieldDecorator('agreement', {
                      rules: [{
                        required: true,
                        message: `${this.props.intl.formatMessage(translations.errorAgree)}`,
                      }],
                    })(
                      <Switch onChange={this.onChangeAgreement} />,
                    )}
                    <p className="agree-text">
                      <FormattedMessage
                        {...translations.iAgree}
                        values={{
                          term: <a onClick={() => this.showModal('tos')} className="ts">
                            <FormattedMessage {...translations.termsLink} />
                          </a>,
                          privacy: <a onClick={() => this.showModal('pp')} className="pp">
                            <FormattedMessage {...translations.privacyLink} />
                          </a>,
                        }}
                      />
                    </p>
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle" >
                <Col span={8}>
                  <Row align="middle" type="flex" justify="center">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      <FormattedMessage {...translations.signUpButton} />
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row type="flex" justify="center" align="middle" >
          <div>
            <Modal
              title="Terms of Service"
              visible={this.state.tosVisible}
              onOk={() => this.handleOk('tos')}
              onCancel={() => this.handleCancel('tos')}
            >
              <p><b>What is Lorem Ipsum?</b><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum as been the industry{"'"}s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions
                of Lorem Ipsum.<br />

                <b>Why do we use it?</b><br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                {"'"}Content here, content here{"'"}, making it look like readable English. Many desktop publishing packages
                and web page editors now use Lorem Ipsum as their default model text,
                and a search for {"'"}lorem ipsum{"'"} will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected
                humour and the like).<br />
              </p>
            </Modal>
          </div>
          <div>
            <Modal
              title="Privacy Policy"
              visible={this.state.ppVisible}
              onOk={() => this.handleOk('pp')}
              onCancel={() => this.handleCancel('pp')}
            >
              <p><b>What is Lorem Ipsum?</b><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum as been the industry{"'"}s standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled
                it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions
                of Lorem Ipsum.<br />

                <b>Why do we use it?</b><br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                {"'"}Content here, content here{"'"}, making it look like readable English. Many desktop publishing packages
                and web page editors now use Lorem Ipsum as their default model text,
                and a search for {"'"}lorem ipsum{"'"} will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected
                humour and the like).<br />
              </p>
            </Modal>
          </div>
        </Row>
      </div>
    );
  }
}

SignUpNamePassForm.propTypes = {
  form: React.PropTypes.string.isRequired,
  intl: intlShape.isRequired,
};

const SignUpNamePass = Form.create()(injectIntl(SignUpNamePassForm));

export default SignUpNamePass;
