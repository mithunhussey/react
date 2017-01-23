import React, { Component } from 'react';

class Main extends Component {
  constructor(props) {
    super(props);
    this.setState({
      nbLocation: 0,
    });
  }

  render() {
    return (
      <div className="home-container">
        {this.props.children}
      </div>
    );
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
};

export default Main;
