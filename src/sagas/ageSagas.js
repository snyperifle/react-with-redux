import { takeEvery, put, delay, takeLatest } from 'redux-saga/effects';
//=============================================================
function* ageUpAsync() {
  yield delay(1000);
  yield put({
    type: 'AGE_UP_ASYNC', value: 1
  })
}

export function* watchAgeUp() {
  yield takeEvery('AGE_UP', ageUpAsync)
}
//=============================================================
function* ageDownAsync(){
  yield delay(1000);
  yield put({
    type: 'AGE_DOWN_ASYNC', value: 1
  })
}

export function* watchAgeDown(){
  yield takeLatest('AGE_DOWN', ageDownAsync)
}
