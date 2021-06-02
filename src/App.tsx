import React from 'react';
import { Provider } from './store/react-redux';
import store from './store';
// import List from './components/hoc/Hoc3'
// import Index from './components/event/index'
// import Index from './components/setState/index'
// import Index from './components/alive/index'
// import Index from './components/hooks/useEffect'
// import Index from './components/ref/index'
import Index from './router/index'



function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Index></Index>
      </div>
    </Provider>
  );
}


export default App;
