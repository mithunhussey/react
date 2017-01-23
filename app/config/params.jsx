const AppParams = {
  dev: {
    appUrl: 'http://localhost:8080',
    apiUrl: 'http://54.251.177.177',
    mobileCode: {
      China: '+86',
      Australia: '+61',
    },
    stripePublishableKey: 'pk_test_rKnl9R4OeRk9MK4X889F8UrH',
    apiEndpoint: '',
  },
  prod: {
    appUrl: '',
    apiUrl: '',
    mobileCode: {
      China: '+86',
      Australia: '+61',
    },
    stripePublishableKey: 'pk_live_mQkV5b2M9wYfMkuShLNtjEQb',
    apiEndpoint: '',
  },
};

export default AppParams;
