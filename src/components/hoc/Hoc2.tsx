import React, { useState, useEffect } from 'react'

// 利用hoc 分片渲染

const renderQueue: Function[] = []
let loggle = false
function tryRender() {
  setTimeout(() => {
    const render = renderQueue.shift()
    if (render) {
      render()
    }
  }, 300)
}

function hoc(Com: any) {
  return function WrapCom(props: any) {
    const [visible, setVisible]= useState(false)
    useEffect(() => {
      renderQueue.push(() => {
        setVisible(true)
      })
      if (!loggle) {
        tryRender()
        loggle = true
      }
    })
    return visible? <Com {...props} tryRender={tryRender}></Com> : <div>加载中.....</div>
  }
}

class Index extends React.Component<any>{
  componentDidMount() {
    const { tryRender } = this.props
    tryRender()
  }
  render () {
    const { name } = this.props
    return (
      <div>item{name}</div>
    )
  }
}

const list = [1, 2, 3, 4, 5]

const Item = hoc(Index)
export default () => (
  <>
  {
    list.map(item => {
      return <Item name={item}/>
    })
  }
    {/* <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/> */}
  </>
)