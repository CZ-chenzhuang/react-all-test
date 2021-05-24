import * as actionTypes from './constants';

const defaultState = {
  name: "user",
  loading: false,
  userInfo: {name: 'admin', age: 0}
}

export default (state = defaultState, action) => {
  switch(action.type){
    case  actionTypes.CHANGE_LOADING:
      let newLoadingState = JSON.parse(JSON.stringify(state));
      newLoadingState.loading = action.data;
      return newLoadingState;
    case  actionTypes.CHANGE_USERINFO:
      let newUserState = JSON.parse(JSON.stringify(state));
      newUserState.loading = false;
      newUserState.userInfo = action.data
      return newUserState;
  }
  return state
}