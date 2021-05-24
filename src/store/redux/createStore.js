/**
 * @param reducer reducer，当调用dispatch时，实际是执行对应的reducer，去改变store中的state
 * 
 */
function createStore(reducer, state) {
  let currentState = {};
  let listenders = [];

  function dispatch(action) {
    let newState = reducer(currentState, action);
    currentState = newState;
    listenders.forEach(listen => listen())
  }

  function getState(key) {
    return currentState;
  }

  function subscribe(listener) {
    listenders.push(listener)
    return () => {
      let index = listenders.indexOf(listener)
      if (index > -1) {
        listenders.splice(index, 1);
      }
    }
  }

  /**
   * 创建store时，先执行一次dispatch
   */
  dispatch({type: '@@'})

  const store = {
    getState,
    dispatch,
    subscribe
  }
  return store
}

export default createStore;