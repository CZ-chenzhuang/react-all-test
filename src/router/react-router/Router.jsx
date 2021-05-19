import React from 'react'
import RouterContext from './RouterContext'

class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location
    }
  }
  componentDidMount() {
    this.unListen = this.props.history.listen(location => {
      this.setState(location)
    })
  }
  componentWillUnmount() {
    this.unListen()
  }
  render() {
    const history = this.props.history
    let value = {
      history,
      location: history.location
    }
    return (
      <RouterContext.Provider value={value}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}

export default Router
