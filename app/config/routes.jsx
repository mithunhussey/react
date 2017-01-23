import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './../components/main';
import Home from './../components/frontend/home';
import Boom from './../components/frontend/boom';
import OurServices from './../components/frontend/ourServices';
import OurApps from './../components/frontend/ourApps';
import HelpAndFaq from './../components/frontend/helpAndFaq';
import Terms from './../components/frontend/terms';
import Advertise from './../components/frontend/advertise';
import Careers from './../components/frontend/careers';
import Privacy from './../components/frontend/privacy';
import Contact from './../components/frontend/contact';

import DashboardLayout from './../components/dashboardLayout';
import Login from './../components/dashboard/login';
import Dashboard from './../components/dashboard/dashboard';
import Sites from './../components/dashboard/sites';
import AddNewSite from './../components/dashboard/addNewSite';

import OnboardingLayout from './../components/OnboardingLayout';
import SignUp from './../components/onboarding/signUp';
import SignUpNamePass from './../components/onboarding/signUpNamePass';
import SignUpPartner from './../components/onboarding/signUpPartner';
import SubscriptionFab from './../components/onboarding/subscriptionFab';
import SubscriptionRetail from './../components/onboarding/subscriptionRetail';
import SubscriptionAttraction from './../components/onboarding/subscriptionAttraction';
import SubscriptionGovTourism from './../components/onboarding/subscriptionGovTourism';
import AddPayment from './../components/onboarding/addPayment';
import PaymentConfirmation from './../components/onboarding/paymentConfirmation';
import AddFirstSite from './../components/onboarding/addFirstSite';


export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'not_logged_in',
    };
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Route path="boom" pagetitle="Boom" component={Boom} />
          <Route path="our-services" pagetitle="Our Services" component={OurServices} />
          <Route path="our-apps" pagetitle="Our Apps 233433" component={OurApps} />
          <Route path="help-and-faq" pagetitle="Help and FAQ" component={HelpAndFaq} />
          <Route path="terms" pagetitle="Terms" component={Terms} />
          <Route path="advertise" pagetitle="Advertise" component={Advertise} />
          <Route path="careers" pagetitle="Careers" component={Careers} />
          <Route path="privacy" pagetitle="Privacy" component={Privacy} />
          <Route path="contact-us" pagetitle="Contact Us" component={Contact} />
        </Route>
        <Route path="onboarding" pagetitle="Sign Up" component={OnboardingLayout}>
          <IndexRoute component={SignUp} />
          <Route path="partner-email-confirmation/:code" pagetitle="Partner Email Confirmation" component={SignUpNamePass} />
          <Route path="partner-sign-up/:user" pagetitle="Partner Sign Up" component={SignUpPartner} />
          <Route path="subscription-fab" pagetitle="Subscription Sign Up" component={SubscriptionFab} />
          <Route path="subscription-retail" pagetitle="Partner Sign Up" component={SubscriptionRetail} />
          <Route path="subscription-attraction" pagetitle="Partner Sign Up" component={SubscriptionAttraction} />
          <Route path="subscription-government-or-tourism" pagetitle="Partner Sign Up" component={SubscriptionGovTourism} />
          <Route path="subscription-payment" pagetitle="Partner Sign Up" component={AddPayment} />
          <Route path="subscription-confirmation" pagetitle="Partner Sign Up" component={PaymentConfirmation} />
          <Route path="add-first-site" pagetitle="Add First Site" component={AddFirstSite} />
        </Route>
        <Route path="partner" component={DashboardLayout}>
          <IndexRoute component={Login} />
          <Route path="dashboard" pagetitle="Dashboard" component={Dashboard} />
          <Route path="sites" pagetitle="Sites" component={Sites}>
            <Route path="add-new-site" pagetitle="Add New Site" component={AddNewSite} />
          </Route>
        </Route>
      </Router>
    );
  }
}
