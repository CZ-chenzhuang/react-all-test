import React from 'react'

// hoc 反向继承，修改渲染树
const Hoc: any = (Component: any) => {
  return class Hoc extends Component {
    render() {
      const element = super.render()
      const newChild = React.Children.map(element.props.children.props.children, (child, index) => {
        if (index === 2) {
          return <li>hello, javascript</li>
        }
        return child
      })
      const newEle = React.cloneElement(element, element.props, newChild)      
      return newEle
    }
  }
}

@Hoc
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>react</li>
          <li>vue</li>
          <li>javascript</li>
        </ul>
      </div>
    )
  }
}

// export default (hoc(Index) as any)