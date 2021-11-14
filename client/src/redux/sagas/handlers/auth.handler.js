/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import { requestIfLoged, requestLogin, requestLogout } from '../requests/auth.request';
import { setLogin, loginError } from '../../slices/authSlice';

export function* handelGetLogin(action) {
  try {
    const { data } = yield call(requestLogin, action);
    if (data) {
      yield put(setLogin(data));
    }
  } catch (error) {
    if (error.response) yield put(loginError(error.response.data));
  }
}

export function* handelIfLoged(action) {
  try {
    const { data } = yield call(requestIfLoged, action);
    if (data) {
      yield put(setLogin(data));
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
}

export function* handelGetLogout(action) {
  try {
    const { data } = yield call(requestLogout, action);
    if (data) {
      console.log(data)
      yield put(setLogin(data));
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    }
  }
}


