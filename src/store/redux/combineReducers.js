/**
 * @param reducers 是由多个reducer组成的对象
 * combineReducers实际返回一个函数，相当于一个总的reducer，传给createStore。内部对每个分reducer处理之后，返回最新的state
 */


function combineReducers(reducers) {
  /**
   * @param state 在createStore中记录的总的state
   * @param ation 是组件内部派发的action
   * 
   */
  return function(state = {}, action) {
    // nextState: 最后返回执行完所有分reducer的最新state
    let nextState = {};
    for(let key in reducers) {
      //  preState：当前分reducer的state
      let preState = state[key];
      // 当前循环的reducer
      let nowReducer = reducers[key];
      // 执行当前reducer，返回当前分reducer对应的state
      let nowState = nowReducer(preState, action);
      // 更新总state中的分reducer中的state
      nextState[key] = nowState;
    }
    return nextState;
  }
}

export default combineReducers;