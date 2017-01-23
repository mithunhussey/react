import antdEn from 'antd/lib/locale-provider/en_US';

import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import { IntlProvider, addLocaleData } from 'react-intl';
import cookie from 'react-cookie';

import Routes from './config/routes';
import localedataEn from './locales/en.json';
import localedataZh from './locales/zh.json';

addLocaleData([...en, ...zh]);

localStorage.setItem('env', 'dev');  // prod for production

let appLocale = cookie.load('appLocale');

if (typeof appLocale === 'undefined') {
  appLocale = {
    antd: antdEn,
    locale: 'en',
    message: localedataEn,
  };
  cookie.save('appLocale', JSON.stringify({
    antd: antdEn,
    locale: 'en',
  }));
}

if (appLocale.locale === 'zh') {
  appLocale.message = localedataZh;
  appLocale.antd = null;
} else if (appLocale.locale === 'en') {
  appLocale.message = localedataEn;
  appLocale.antd = antdEn;
}


ReactDOM.render(
  <LocaleProvider locale={appLocale.antd}>
    <IntlProvider
      locale={appLocale.locale}
      messages={appLocale.message}
    >
      <Routes />
    </IntlProvider>
  </LocaleProvider>, document.getElementById('app'));

