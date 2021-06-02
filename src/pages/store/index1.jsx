import React, { useState, useEffect } from 'react';
import { createStore } from '../../store/redux';

/**
 * createStore基本实现使用
 */

function reducer(state = {num: 0}, action) {
  switch (action.type) {
    case 'ADD':
      return {num: ++state.num};
    case 'MINUS':
      return {num: --state.num};
    default:
      return state;
  }
}

const store = createStore(reducer, {num: 0})
console.log(store, 'store');
console.log(store.getState());


const Index = (props) => {
  const { num: storeNum } = store.getState()
  const [num, setNum] = useState(storeNum)
  useEffect(() => {
    store.subscribe(onAdd)
  }, [])

  const onAdd = () => {
    const { num: storeNum } = store.getState()
    setNum(storeNum)
  }

  return (
    <div>
      <h3>store</h3>
      <p>{num}</p>
      <button onClick={() => {store.dispatch({type: 'ADD'})}}>+</button>
      <button onClick={() => {store.dispatch({type: 'MINUS'})}}>-</button>
    </div>
  )
}

export default Index;