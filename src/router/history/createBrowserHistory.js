/**
 * history对象内部自己有历史栈的维护
 * history路由自己有对state的维护，并且刷新页面之后，不会被清空
 */

 function createBrowserHistory() {
  let action;
  let globalHistory = window.history
  let listeners = [];
  function listen(listener) {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(item => item !== listener);
    }
  }
  function go(n) {
    globalHistory.go(n);
  }
  function goBack() {
    globalHistory.back();
  }
  function goForward() {
    globalHistory.forward();
  }
  function notify() {
    let { pathname } = window.location;
    let { state } = window.history;
    Object.assign(history, {action, location: { pathname, state }});
    listeners.forEach(listener => listener(history.location));
  }
  
  function push(pathname, newState) {
    action = 'PUSH';
    if (typeof pathname === 'object') {
      newState = pathname.state;
      pathname = pathname.pathname;
    }
    globalHistory.pushState(newState, null, pathname);
    notify();
  }

  window.onpopstate = function() {
    action = 'POP';
    notify();
  }
  const history = {
    action: 'POP',
    go,
    goBack,
    goForward,
    push,
    listen,
    location: {pathname: window.location.pathname || '/', state: globalHistory.state}
  }

  return history
}


export default createBrowserHistory;