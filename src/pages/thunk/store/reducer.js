import * as actionTypes from './constants';

const defaultState = {
  name: "admin",
  loading: false,
  adminList: [{name: 'vue', id: 1}]
}

export default (state = defaultState, action) => {
  switch(action.type){
    case  actionTypes.CHANGE_NAME:
      let newNameState = JSON.parse(JSON.stringify(state));
      newNameState.name = action.data;
      return newNameState;
    case  actionTypes.CHANGE_LOADING:
      let newLoadingState = JSON.parse(JSON.stringify(state));
      newLoadingState.loading = action.data;
      return newLoadingState;
    case  actionTypes.CHANGE_LIST:
      let newListState = JSON.parse(JSON.stringify(state));
      newListState.loading = false;
      newListState.adminList = [...newListState.adminList, ...action.data]
      return newListState;
  }
  return state
}