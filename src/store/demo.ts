import { takeLatest, call, put } from 'redux-saga/effects';

import * as API from '../api/demo';

const initialState = {
  state: '',
  isFetching: false,
  isError: false,
};

export type InitialState = Readonly<typeof initialState>

enum ActionType {
  FETCH_DEMO_REQUEST = 'FETCH_DEMO_REQUEST',
  FETCH_DEMO_SUCCESS = 'FETCH_DEMO_SUCCESS',
  FETCH_DEMO_FAILURE = 'FETCH_DEMO_FAILURE',
}

export const demoAction = {
  fetchDemo: () => ({ type: ActionType.FETCH_DEMO_REQUEST }),
  fetchDemoFailure: () => ({ type: ActionType.FETCH_DEMO_FAILURE }),
  fetchDemoSuccess: (v: String) => ({ type: ActionType.FETCH_DEMO_SUCCESS, v }),
};


function* fetchDemoSaga(action: ReturnType<typeof demoAction.fetchDemo>) {
  console.log(action);
  try {
    // yield const response = call(Api.getDemoRoot)
    const { data } = (yield call(API.getDemoRoot));
    console.log('response', data);

    yield put(demoAction.fetchDemoSuccess(data));
  } catch (error) {
    yield put(demoAction.fetchDemoFailure());
  }
}

export const saga = [
  takeLatest(ActionType.FETCH_DEMO_REQUEST, fetchDemoSaga),
];


export const reducer = (state = initialState as InitialState, action:any) => {
  switch (action.type) {
    case ActionType.FETCH_DEMO_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ActionType.FETCH_DEMO_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    case ActionType.FETCH_DEMO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        state: action.v,
      };
    default:
      return state;
  }
};
