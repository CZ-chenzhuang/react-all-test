import React from 'react';
import { HashRouter, BrowserRouter, Link } from 'react-router-dom'
import RoutesRender from './RouteRender';
import routes from './menuConfig';
// import { HashRouter, BrowserRouter, Route } from './react-router-dom'


/**
 * 前端路由hash、history:
 * https://www.cnblogs.com/tugenhua0707/p/10859214.html
 * https://zhuanlan.zhihu.com/p/130995492
 * 实现：public/router.html
 */

/**
 * 路由跳转：
 *  1.可以用标签跳转 a Link标签
 *  2.this.props.history.push/go/goBack/goForward
 * 
 * 路由传值：
 *  1.使用params路径传值: <Route path="/find/:name" component={Find}/>  <Link to={"/find/" + item.name}>跳转传值</Link>，
 * 使用this.props.match.params.name取值，且这种方式传值，不管HashRouter还是BrowserRouter方式，刷新页面之后参数不会丢失。
 * 
 *  2.使用this.props.history.push({pathname: '/', state: {name:'query'}})，取值时用this.props.location.state。这种方式需要注意，
 * 使用BrowserRouter时，刷新页面(包括前进后退)，值还在，因为BrowserRouter内部实现用的是history API，内部有存储state。但是使用HashRouter，
 * 刷新页面之后(包括前进后退)，传递的值会丢失，HashRouter内部实现是用的监听hashchange，没有state的处理。
 * 
 *  3.使用this.props.history.push({pathname: '/', query: {name:'query'}})，取值时用this.props.location.query。这种方式传参，
 * HashRouter和BrowserRouter模式，刷新页面(包括前进后退)，传递的值都会丢失。
 * 
 */

/**
 * Switch 标签内部只渲染第一个匹配的路径
 * Redirect 重定向<Redirect to='/home'/> 和Switch组合使用，放在Route最后，都不匹配走重定向。也可以在组件内部自己重定向。
 */

const Index = () => {
  const Menus = () => {

  }

  return (
    <BrowserRouter>
      <div className="main-left">
        1
      </div>
      <div className="main-right">
        <RoutesRender routes={routes}/>
      </div>
    </BrowserRouter>
  )
}

export default Index;