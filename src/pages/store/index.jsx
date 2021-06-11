import React, { useState, useEffect } from 'react';
import { createStore, combineReducers } from '../../store/redux';

/**
 * createStore, 结合combineReducers使用
 */

function reducer1(state = {num: 0, name: 'reducer1'}, action) {
  switch (action.type) {
    case 'reducer1/ADD':
      return {num: ++state.num};
    case 'reducer1/MINUS':
      return {num: --state.num};
    default:
      return state;
  }
}

function reducer2(state = {num: 0, name: 'reducer2'}, action) {
  switch (action.type) {
    case 'reducer2/ADD':
      return {num: ++state.num};
    case 'reducer2/MINUS':
      return {num: --state.num};
    default:
      return state;
  }
}

const reducer = combineReducers({
  reducer1,
  reducer2
})

const store = createStore(reducer)
// console.log(store, 'store');
// console.log(store.getState());


const Index = () => {

  const { reducer1: {num: storenum1}, reducer2: {num: storenum2} } = store.getState()
  const [num1, setNum1] = useState(storenum1)
  const [num2, setNum2] = useState(storenum2)

  useEffect(() => {
    store.subscribe(onAdd)
  }, [])

  const onAdd = () => {
    const { reducer1: {num: storenum1}, reducer2: {num: storenum2} } = store.getState()
    setNum1(storenum1)
    setNum2(storenum2)
  }

  return (
    <div>
      <h3>store</h3>
      <h2>reducer1</h2>
      <p>{num1}</p>
      <button onClick={() => {store.dispatch({type: 'reducer1/ADD'})}}>+</button>
      <button onClick={() => {store.dispatch({type: 'reducer1/MINUS'})}}>-</button>

      <h2>reducer2</h2>
      <p>{num2}</p>
      <button onClick={() => {store.dispatch({type: 'reducer2/ADD'})}}>+</button>
      <button onClick={() => {store.dispatch({type: 'reducer2/MINUS'})}}>-</button>
    </div>
  )
}

export default Index;