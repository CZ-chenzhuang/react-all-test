import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../../pages/saga/store';

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用;

function getInfo(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: data, age: 7})
    }, 3000)
  })
}

function * fetchUser(action) {
  try {
     const user = yield call(getInfo, action.payload.userName);
     yield put({type: actionTypes.CHANGE_USERINFO, user: user});
  } catch (e) {
     yield put({type: actionTypes.CHANGE_USERINFO_FAILED, message: '请求失败'});
  }
}

export default fetchUser;