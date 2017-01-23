import React, { Component } from 'react';
import Superagent from 'superagent';
import Params from './../../config/params';

const AppParams = Params[localStorage.getItem('env')];
class Cards extends Component {
  constructor(props:Object) {
    super(props);
    this.onStripeUpdate = this.onStripeUpdate.bind(this);
  }
  componentDidMount() {
    this.stripehandler = window.StripeCheckout.configure({
      key: AppParams.stripePublishableKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: (token) => {
        Superagent.post(AppParams.apiEndpoint)
          .send({ stripeToken: token.id, email: token.email, location: 1 }).end((error, res) => {
            console.log(res);
          });
      },
    });
  }
  componentWillUnmount() {
    if (this.stripehandler) {
      this.stripehandler.close();
    }
  }
  onStripeUpdate(e:Object) {
    this.stripehandler.open({
      name: 'Uwai',
      description: 'Pro Subscription',
      panelLabel: 'Subscribe',
      allowRememberMe: true,
      amount: this.props.price,
      currency: 'usd',
    });
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <button onClick={this.onStripeUpdate} >Subscribe</button>
      </div>
    );
  }
}

Cards.propTypes = {
  price: React.PropTypes.string.isRequired,
};

export default Cards;
