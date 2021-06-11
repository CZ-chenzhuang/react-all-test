import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom'

const RoutesRender = (props) => {
  const initRoutes = () => {
    const { routes } = props;
    // 将重定向过滤出来，最后拼到<Route/> 后面
    let redirectRoutes = routes.filter(item => item.redirect)
    let redirectCom = redirectRoutes.map((route,index) => <Redirect key={index} path={route.path} to={route.redirect}/>)

    const router = routes.map(route => {
      return (
        <Route
          key={route.path}
          render={(rest) => {
            const { component: Component } = route;
            return <Component {...rest}/>
          }}
          {...route}
        />
      )
    }).concat(redirectCom)
    return router;
  }

  return (
    <Switch>
      {initRoutes()}
    </Switch>
  )
}

export default RoutesRender;