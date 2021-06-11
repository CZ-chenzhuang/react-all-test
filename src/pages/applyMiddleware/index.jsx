import { type } from 'os';
import React from 'react';
import { createStore } from 'redux';


/**
 * applyMiddleWare和中间件的使用：
 * 
 * 1.redux中数据修改是ui层通过事件触发dispatch，派发一个action，在reducer中判断type做相应的state更新。
 * 2.正常情况下，action只能是一个普通对象，不支持其他格式，所以react-redux提供了applyMiddleWare方法， 去支持使用react-redux中间件，
 * 使action支持函数，或者promise等其他格式数据。
 * 3.applyMiddleWare内部是对store的dispatch方法的重写，执行applyMiddleWare函数传入的中间件，对dispatc方法扩展，使其可以劫持action，
 * 对action进行判断，做相应的处理。从而做到dispatch时，不仅限于传入纯对象的action。
 *  
 */

function reducer(state = {num: 1}, action) {
  switch(action.type) {
    case 'ADD':
      return {num: ++state.num};
    default:
      return state;
  }
}


const store = applyMiddleWare(promise, thunk, logger)(createStore)(reducer)
// store.dispatch(new Promise((resolve, reject) => {
//   resolve({type: 'ADD'})
// }))
store.dispatch(function(dispatch, getState) {
  dispatch(new Promise((resolve, reject) => {
    resolve({type: 'ADD'})
  }))
})


function applyMiddleWare(...middleWares) {
  return function (createStore) {
    return function (reducer) {
      let store = createStore(reducer);
      let dispatch;
      let middleWareAPI = {
        ...store,
        dispatch: (action) => {dispatch(action)}
      }
      let chains = middleWares.map(middleWare => middleWare(middleWareAPI))
      // dispatch = middleWare(middleWareAPI)(store.dispatch);
      dispatch = compose(chains)(store)
      debugger
      return {
        ...store,
        dispatch
      }
    }
  }
}

function logger (store) {
  return (next) => (action) => {
    debugger
    console.log('prev state', store.getState());
    next(action);
    console.log('next state', store.getState());
  }
}

function thunk({dispatch, getState}) {
  return (next) => (action) => {
    debugger
    if(typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  }
}
function promise({dispatch, getState}) {
  return (next) => (action) => {
    debugger
    if (typeof action.then === 'function') {
      return action.then(newAction => dispatch(newAction))
    }
    return next(action);
  }
}


function compose(fns) {
  return (store) => {
    return fns.reduceRight((acc, cur) => {
      debugger
      return cur(acc)
    }, store.dispatch)
  }
  // return fns.reduce(
  //   (pre, cur) =>
  //     (...args) =>
  //       pre(cur(...args))
  // );
}


export default class Index extends React.Component {
  render () {
    return (
      <div>
        <h3>applyMiddleWare和中间件</h3>
      </div>
    )
  }
}