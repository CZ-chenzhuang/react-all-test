import Home from './pages/Home';
import My from './pages/My';

import Thunk from '../pages/thunk';
import Saga from '../pages/saga';
import Store from '../pages/store';
import ApplyMiddleWare from '../pages/applyMiddleware';

const routes = [
  {
    path: '/',
    name: '首页',
    exact: true,
    component: Home,
  },
  {
    path: '/thunk',
    name: 'thunk',
    exact: true,
    component: Thunk
  },
  {
    path: '/saga',
    name: 'saga',
    exact: true,
    component: Saga
  },
  {
    path: '/store',
    name: 'store',
    exact: true,
    component: Store
  },
  {
    path: '/applyMiddleWare',
    name: 'applyMiddleWare',
    exact: true,
    component: ApplyMiddleWare
  }
]

export default routes;