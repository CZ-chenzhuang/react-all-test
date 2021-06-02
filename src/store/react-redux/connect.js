import React, {useContext, useReducer, useEffect} from 'react'
import ReactReduxContext from './ReactReduxContext';

function connect (mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    function NewComponent(props) {
      const [, foceUpdate] = useReducer(() => ({}));
      const { getState, dispatch, subscribe } = useContext(ReactReduxContext);
      useEffect(() => {
        let unSubscribe = subscribe(foceUpdate)
        return () => {
          unSubscribe();
        }
      }, [])
      const state = getState();
      const stateProps = mapStateToProps(state);
      const dispatchProps = mapDispatchToProps(dispatch);
      return <Component  {...stateProps}  {...dispatchProps} {...props}/>
    }
    return NewComponent;
  } 
}

export default connect;