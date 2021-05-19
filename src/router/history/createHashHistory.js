/**
 * 历史栈的维护，hash路由需要自己维护一个栈来处理页面的跳转，回退，前进
 * state的维护，需要自己维护state，（通过push 跳转传递的state，存储在history.location）
 * hash路由的state，在刷新页面之后会被清空（history不是，）
 */


function createHashHistory() {
  let action;
  let listeners = [];
  let historyStack = [];
  let state;
  let historyIndex = -1;
  function listen(listener) {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(item => item !== listener);
    }
  }
  function go(n) {
    historyIndex += n
    let location = historyStack[historyIndex]
    window.location.hash = location
  }
  function goBack() {
    go(-1)
  }
  function goForward() {
    go(1)
  }
  function push(pathname, newState) {
    action = 'PUSH';
    // 给hash赋值是不需要#，取值是带#
    if (typeof pathname === 'string') {
      state = newState
      historyStack[++historyIndex] = pathname
    }
    if (typeof pathname === 'object') {
      state = pathname.state
      pathname = pathname.pathname
    }
    window.location.hash = pathname
  }
  window.addEventListener('hashchange', () => {
    let pathname = window.location.hash.slice(1);
    // 把新的location和pathname合并到history
    Object.assign(history, {action, location: { pathname, state: state }})
    listeners.forEach(listener => listener(history.location))
  })
  window.location.hash = window.location.hash || '#/'
  const history = {
    action: 'POP',
    go,
    goBack,
    goForward,
    push,
    listen,
    location: {pathname: window.location.hash ? window.location.hash.slice(1) : '/'}
  }

  return history
}


export default createHashHistory;