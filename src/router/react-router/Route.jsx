import React from 'react'
import RouterContext from './RouterContext'

/**
 * 获取context中的数据
 * 
 */

class Route extends React.Component {
  static contextType = RouterContext
  render () {
    let { history, location } = this.context
    let { path, component: RouterComponent } = this.props
    let match = {}
    let routerProps = {
      history,
      location,
      match
    }
    let renderElement = null
    if (path === location.pathname) {
      renderElement = <RouterComponent {...routerProps}/>
    }
    return renderElement
  }
}
export default Route