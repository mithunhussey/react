import React, { Component } from 'react';
import { Alert, Button, Checkbox, Form, Icon, Input } from 'antd';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

class NormalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      status: 'not_logged_in',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (!err) {
        this.setState({
          status: 'logging_in',
        });
      } else {
        this.setState({
          status: 'invalid_form',
        });
      }
    });
  }

  renderAlert() {
    let returnVal = '';
    if (this.state.status === 'login_error') {
      returnVal = <Alert message="Invalid username/password combination!" type="error" showIcon />;
    } else if (this.state.status === 'logging_in') {
      returnVal = <Alert message="Logging in..." type="info" showIcon />;
    } else if (this.state.status === 'invalid_form') {
      returnVal = <Alert message="Please fix the errors below." type="warning" showIcon />;
    }

    return returnVal;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        { this.renderAlert() }
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email address!' }],
            })(
              <Input addonBefore={<Icon type="user" />} placeholder="Email" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox className="login-form-remember">Remember me</Checkbox>,
            )}
            <a className="login-form-forgot">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }

}

NormalLoginForm.propTypes = {
  form: React.PropTypes.string.isRequired,
};

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
