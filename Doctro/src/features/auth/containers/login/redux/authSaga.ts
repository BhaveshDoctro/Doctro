/**
 * Gets the repositories of the user from Github
 */

import {delay, put, select, takeLatest} from 'redux-saga/effects';
import apirequest from '../../../../../services/api';
import {selectLoginForm} from './authSelectors';
import {actions} from './authSlice';

export function* loginRequest() {
  yield delay(500);
  // Select username from store
  const form: {data: any} = yield select(selectLoginForm);
  console.log(form);
  const options = {
    payloads: {
      phone: form.data.userName.value,
      password: form.data.password.value,
    },
  };
  try {
    const response = yield apirequest.post(`login`, options);
    yield put(actions.loginSuccess(response));
  } catch (err: any) {
    if (err.response?.status) {
      yield put(actions.loginError(err.message));
    } else {
      yield put(actions.loginError(err));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* authSaga() {
  // Watches for LOAD_REPOS actions and calls loginResponse when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.login.type, loginRequest);
}
