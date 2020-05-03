import App from 'next/app';
import React from 'react';
import { NextRouter } from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import { configureStore } from '../src/store/index';

type AppProps = {
  store?: any;
  router: NextRouter;
}


class MyApp extends App<AppProps> {
  render() {
    const {
      Component,
      pageProps,
      store,
      router,
    } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} router={router} />
      </Provider>
    );
  }
}

export default withRedux(configureStore)(withReduxSaga(MyApp));
