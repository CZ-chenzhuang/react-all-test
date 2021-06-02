import React from 'react';
import ReactReduxContext from './ReactReduxContext';

function Provider(props) {
  const {store} = props;
  return (
    <ReactReduxContext.Provider value={store}>
      {props.children}
    </ReactReduxContext.Provider>
  )
}

export default Provider;