import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import Superagent from 'superagent';

import { FormattedMessage, defineMessages } from 'react-intl';
import { Form, Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
import loader from './../../images/loader.gif';

const FormItem = Form.Item;
const translations = defineMessages({ title: {
  id: 'component.onboarding.signUp.title',
  defaultMessage: 'Sign up now to get connected to millions of Chinese consumers',
  description: 'This translation is defined in a defineMessage.',
},
  button: {
    id: 'component.onboarding.signUp.button',
    defaultMessage: 'Sign up',
    description: 'This translation is defined in a defineMessage.',
  },
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: '',
      loading: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({ loading: true });
        Superagent.get('https://jsonplaceholder.typicode.com/posts/1')
          .send(values).end((error, res) => {
            if (res.body.id === 1) {
              this.setState({ loading: false });
              this.setState({ message: `check your email! We have sent a confirmation link to ${values.email}. click it to confirm your your email address` });
              hashHistory.push('/onboarding/partner-email-confirmation/hashcode-dwadaw');
            }
          });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="sign-up-div">
        <Form inline onSubmit={this.handleSubmit} className="signup-email">
          <Row type="flex" justify="center" align="middle" className="inner-div">
            <h4 className="signup-email-title"><FormattedMessage {...translations.title} /></h4>
            <Col span={24} className="sign-email-col">
              <FormItem className="form-item-email">
                {getFieldDecorator('email', {
                  rules: [{ type: 'email', required: true, message: 'Please input your Email!' }],
                })(
                  <Input size="large" placeholder="someone@example.com" />,
                )}
              </FormItem>
              <FormItem className="signup-email-button">
                <Button type="primary" size="large" htmlType="submit" className="sign-up-button"><FormattedMessage {...translations.button} /></Button>
                {
                  this.state.loading === true
                  &&
                  <img src={loader} alt="loader" className="loader-signup" />
                }
              </FormItem>
              <p className="signup-alert">{this.state.message}</p>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  form: React.PropTypes.string.isRequired,
};
const SignUp = Form.create()(SignUpForm);

export default SignUp;
