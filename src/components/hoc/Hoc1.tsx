import React, { useEffect } from 'react'

// 利用hoc 控制业务组件的显示隐藏

class Index extends React.Component<any> {
  static sayGood() {
    console.log('good')
  }
  render() {
    let {name, changeVisible} = this.props
    return (
      <>
        <div>hello, my name is {name}</div>
        <button onClick={changeVisible}>卸载</button>
      </>
    )
  }
  componentDidMount() {
    console.log('组件挂载')
  }
}

function classHoc(Component: any) {
  return class WrapCom extends React.Component<any, any> {
    constructor(props: any) {
      super(props)
      this.state = {
        name: 'hoc组件的state',
        visible: true
      }
    }
    changeVisible = () => {
      this.setState({
        visible: !this.state.visible
      })
    }
    render() {
      return (
        <>
          <button onClick={this.changeVisible}>挂载</button>
          { this.state.visible ? <Component {...this.props} changeVisible={this.changeVisible}/>: <span>暂不显示</span> }
        </>
      )
    }
    componentDidMount() {
      console.log('hoc 挂载')
    }
  }
}

const NewIndex = classHoc(Index)

export default NewIndex