
import createSagaMiddleware from 'redux-saga';
import {
  combineReducers,
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { all } from 'redux-saga/effects';

import {
  reducer as demo,
  saga as demoSaga,
} from './demo';

const rootReducer = combineReducers({
  demo,
});

function* rootSaga() {
  yield all([
    ...demoSaga,
  ]);
}

const bindMiddleware = (middleware) => {
  console.log(middleware);

  return compose(applyMiddleware(...middleware));
};
// if (process.env.NODE_ENV !== 'production') {
//   const { composeWithDevTools } = require('redux-devtools-extension');
//   return composeWithDevTools(applyMiddleware(...middleware));
// }
// return applyMiddleware(...middleware)
// ;

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable */
export function configureStore(initialState = {}) {
  const store: any = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}
