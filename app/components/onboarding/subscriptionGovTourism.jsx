import React, { Component } from 'react';
import { Form, Row, Col, Card, DatePicker, Input, Button } from 'antd';

import girl from './../../images/vector_woman.png';

class SubscriptionGovTourismForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      selectedtime: '',
      selectedtimestring: '',
    };
  }

  onChange(value, dateString) {
    this.setState({
      selectedtime: value,
      selectedtimestring: dateString,
    });
  }

  render() {
    return (
      <div>
        <p className="gov-subscr-title">Government or Tourism providers</p>
        <Row type="flex" align="middle" justify="center">
          <Col span={24}>
            <Row type="flex" align="middle" justify="center">
              <Col span={18}>
                <p>We offer many services and the best way to see how we can help you would
                   be to make contact and understand your needs.  One of our team will be
                   in contact with you. Some of our services are below for your reference.
                </p>
              </Col>
            </Row>
            <Row type="flex" align="middle" justify="center">
              <Col span={18}>
                <Row type="flex" align="middle" justify="center">
                  <Col span={10} className="call-me">
                    <DatePicker
                      showTime
                      format="YYYY-MM-DD HH:mm:ss"
                      placeholder="Select Time"
                      onChange={this.onChange}
                    />
                  </Col>
                  <Col span={10} className="call-me">
                    <Row type="flex" align="middle" justify="center">
                      <Button type="primary" size="large" htmlType="submit" className="sign-up-button">
                        Email or Call me
                      </Button>
                    </Row>
                    <Row type="flex" align="middle" justify="center" className="mob-call-me">
                      <Input
                        addonBefore={'+61'}
                        maxLength="10"
                        type="text"
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row type="flex" align="middle" justify="center">
              <Col span={18}>
                <Row type="flex" align="middle" justify="center" className="gov-subscr-card">
                  <Col span={12}>
                    <Card
                      extra={<img alt="card hello" width="20px" height="20px" src={girl} />}
                      title={<div><p>Content Syndication Services</p><p>Local and Global</p>
                      </div>}
                    > Uwia.com hosts our sites globally and in Mainland China.
                    We operate with full licences to publish and
                    promote destination marketing content.
                    Whats more, we also allow full transparent and
                    data reporting on reads, shares and
                    social impact of your marketing and campaign.
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      extra={<img alt="wd demo" width="20px" height="20px" src={girl} />}
                      title={<div><p>Content Syndication Services</p><p>Local and Global</p>
                      </div>}
                    >Uwia.com hosts our sites globally and in Mainland China.
                    We operate with full licences to publish a
                    nd promote destination marketing content.
                    Whats more, we also allow full transparent
                    and data reporting on reads, shares
                    and social impact of your marketing and campaign.
                    </Card>
                  </Col>
                </Row>
                <Row type="flex" align="middle" justify="center" className="gov-subscr-card">
                  <Col span={12}>
                    <Card
                      extra={<img alt="card hello" width="20px" height="20px" src={girl} />}
                      title={<div><p>Content Syndication Services</p><p>Local and Global</p>
                      </div>}
                    > Uwia.com hosts our sites globally and in Mainland China.
                    We operate with full licences to publish and
                    promote destination marketing content.
                    Whats more, we also allow full transparent and
                    data reporting on reads, shares and
                    social impact of your marketing and campaign.
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      extra={<img alt="wd demo" width="20px" height="20px" src={girl} />}
                      title={<div><p>Content Syndication Services</p><p>Local and Global</p>
                      </div>}
                    >Uwia.com hosts our sites globally and in Mainland China.
                    We operate with full licences to publish a
                    nd promote destination marketing content.
                    Whats more, we also allow full transparent
                    and data reporting on reads, shares
                    and social impact of your marketing and campaign.
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const SubscriptionGovTourism = Form.create()(SubscriptionGovTourismForm);
export default SubscriptionGovTourism;
