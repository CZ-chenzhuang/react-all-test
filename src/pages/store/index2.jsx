import React, { useState, useEffect } from 'react';
import { createStore, combineReducers } from '../../store/redux';
import { Provider, connect } from '../../store/react-redux';

// import { createStore, combineReducers } from 'redux';
// import { Provider, connect } from 'react-redux';

/**
 * redux 和 react-redux （Provider, connect）
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


const Index = (props) => {
  console.log(props, 'props11');
  return (
    <div>
      <h3>store</h3>
      <p>{props.num}</p>
      <button onClick={() => {props.onAdd()}}>+</button>
      <button onClick={() => {props.onMinus()}}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  num: state.num
})
const mapDispatchToProps = (dispatch) => ({
  onAdd() {
    dispatch({type: "ADD"})
  },
  onMinus() {
    dispatch({type: "MINUS"})
  }
})

const NewIndex = connect(mapStateToProps, mapDispatchToProps)(Index);


const App = () => {
  return (
    <Provider store={store}>
      <NewIndex></NewIndex>
    </Provider>
  )
}

export default App;