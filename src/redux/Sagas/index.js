import { all, fork } from 'redux-saga/effects';
import AppSaga from '../App/Saga';

export default function* rootSaga() {
  yield all([fork(AppSaga)]);
}
