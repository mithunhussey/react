import React, { Component } from 'react';
import { Select } from 'antd';
import cookie from 'react-cookie';

import './../themes/theme.less';
import './../styles/Onboarding.css';
import Logo from './../images/uwai_logo.png';

const Option = Select.Option;

class OnboardingLayout extends Component {
  constructor(props) {
    super(props);
    this.handleLangChange = this.handleLangChange.bind(this);
    const appLocale = cookie.load('appLocale');

    this.state = {
      appLocale,
    };
  }

  handleLangChange(locale) {
    const appLocale = {
      locale,
    };
    this.setState({ appLocale });
    cookie.save('appLocale', JSON.stringify({ locale: appLocale.locale }), { path: '/' });
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="container">
          <header>
            <div className="logo-section">
              <img alt="Uwai Logo" src={Logo} />
            </div>
          </header>
          <section className="onboarding-section">
            <div className="locale-dropdown">
              <Select defaultValue={this.state.appLocale.locale} onChange={this.handleLangChange}>
                <Option value="en">English</Option>
                <Option value="zh">Chinese</Option>
              </Select>
            </div>
            {this.props.children}
          </section>
          <footer className="align-center">
            <div>Uwai.com {'©'} 2016</div>
          </footer>
        </div>
      </div>
    );
  }
}

OnboardingLayout.propTypes = {
  children: React.PropTypes.string,
};

export default OnboardingLayout;
