export { default as createStore } from './createStore';
export { default as combineReducers } from './combineReducers';


/**
 * redux:
 *    redux核心是使用createStore创建一个store，store是个对象，里面包含getState、dispatch、subscribe方法
 *    getState：可以返回sotre的state。
 *    dispatch：组件内部调用dispatch，去派发一个action，dispatch方法接受action后，将action传递到createStore时的第一个参数，
 * reducer中，通过reducer计算，返回新的state，更新sotre中的state。
 *    subscribe：组件内部通过执行subscribe订阅，传递订阅方法给store中订阅数组，每当dispatch触发，执行完reducer，获取到最新的state后，
 * 都会去遍历执行订阅方法，通知订阅的组件去更新视图。
 * 
 */