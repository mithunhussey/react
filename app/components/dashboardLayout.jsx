import React, { Component } from 'react';
import './../styles/dashboard.css';
import Logo from './../images/uwai_logo.png';

export default class OnboardingLayout extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <div className="logo-section">
            <img alt="Uwai logo" src={Logo} />
          </div>
        </header>
        <section>
          {this.props.children}
        </section>
        <footer className="align-center">
          <div>Uwai.com {'©'} 2017</div>
        </footer>
      </div>
    );
  }
}

OnboardingLayout.propTypes = {
  children: React.PropTypes.node,
};
