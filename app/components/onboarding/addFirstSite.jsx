import React from 'react';
import { Steps, Button, message, Row, Col, Form, Input, Alert } from 'antd';
import { hashHistory } from 'react-router';
import cookie from 'react-cookie';
import girl from './../../images/vector_woman.png';

const Step = Steps.Step;
const FormItem = Form.Item;

class AddFirstSiteForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      userInfo: cookie.load('userInfo'),
    };
  }

  next() {
    this.props.form.validateFields((err) => {
      if (!err) {
        const current = this.state.current + 1;
        this.setState({ current });
      }
    });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (!err) {
        hashHistory.push('/onboarding/partner-sign-up/dwaddwd');
      }
    });
  }

  renderAlert() {
    let rAlert = '';
    if (this.state.status === 'loginError') {
      rAlert = <Alert message="Invalid username/password combination!" type="error" showIcon />;
    } else if (this.state.status === 'loggingIn') {
      rAlert = <Alert message="Logging in..." type="info" showIcon />;
    } else if (this.state.status === 'invalidForm') {
      rAlert = <Alert message="Please fix the errors below." type="warning" showIcon />;
    }
    return rAlert;
  }

  render() {
    const { current } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const steps = [{
      title: 'Add your first site - Basic',
      content: <div>
        <Col span={24}>
          <Col span={4}>
            <Row type="flex" align="top" className="girl-image">
              <img role="presentation" src={girl} />
            </Row>
          </Col>
          <Col span={20} className="step-1-form">
            <Form onSubmit={this.handleSubmit} className="sign-up-np-form">
              <Row type="flex" justify="center" align="middle" >
                {this.renderAlert()}
              </Row>
              <Row type="flex" justify="center" align="middle" >
                <Col span={20}>
                  <FormItem {...formItemLayout} label="Business Name" >
                    { getFieldDecorator('businessName', {
                      rules: [{ required: true, message: 'Please input your Business Name!' }],
                      initialValue: this.state.userInfo.businessName,
                    })(
                      <Input type="text" placeholder="Business Name" />,
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle" >
                <Col span={20}>
                  <FormItem {...formItemLayout} label="Email" >
                    { getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Please input your Email!' }],
                    })(
                      <Input type="text" placeholder="Email" />,
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle" >
                <Col span={20}>
                  <FormItem {...formItemLayout} label="Mobile" >
                    { getFieldDecorator('mobile', {
                      rules: [{ required: true, message: 'Please input your Mobile Number!' }],
                    })(
                      <Input type="text" placeholder="Mobile Number" />,
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle" >
                <Col span={20}>
                  <FormItem {...formItemLayout} label="Business Description" >
                    { getFieldDecorator('businessDesc', {
                      rules: [{ required: true, message: 'Please input your Business Description!' }],
                    })(
                      <Input type="textarea" placeholder="Business Description" />,
                    )}
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </Col>
        </Col>
      </div>,
    }, {
      title: 'Address',
      content: 'Second-content',
    }, {
      title: 'Photo',
      content: 'Last-content',
    },
    {
      title: 'Others',
      content: 'Last-content',
    }];

    return (
      <div>
        <Row align="middle" justify="center" type="flex">
          <Col span={20}>
            <Steps current={current} >
              { steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">
              {steps[this.state.current].content}
              <div className="steps-action">
                {
                  this.state.current > 0
                  &&
                  <Button style={{ marginLeft: 8 }} type="ghost" onClick={() => this.prev()}>
                          Previous
                  </Button>
                }
                {
                  this.state.current < steps.length - 1
                  &&
                  <Button type="primary" onClick={() => this.next()}>Save & Next Step</Button>
                }
                {
                  this.state.current === steps.length - 1
                  &&
                  <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                }
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

AddFirstSiteForm.propTypes = {
  form: React.PropTypes.string.isRequired,
};

const AddFirstSite = Form.create()(AddFirstSiteForm);

export default AddFirstSite;
