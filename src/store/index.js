import {createStore, combineReducers, applyMiddleware} from "redux";
import { adminReducer } from '../pages/thunk/store';
import { userReducer } from '../pages/saga/store';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga';

const reducers = combineReducers({
  adminReducer,
  userReducer
})

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(thunk));
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const store = createStore(reducers);

// then run the saga
// sagaMiddleware.run(mySaga);

export default store;