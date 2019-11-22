import { all, fork } from 'redux-saga/effects';
import { watchAgeUp, watchAgeDown } from './ageSagas';

export default function*(){
  yield all([
    fork(watchAgeUp),
    fork(watchAgeDown)
  ])
}