import React from 'react'
import ReactDOM from 'react-dom'



export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  componentDidMount() {
    Promise.resolve().then(() => {
      this.setState({num: this.state.num + 1})
      console.log(this.state.num, )
    })
  }

  onDOMClick = e => {
    console.log(e, 'e')
    if (e.target && e.target.matches('button')) {
      return 
    }
      console.log('dom event')
  }
  
  onClick = e => {
    console.log('react event')
    e.stopPropagation()
  }

  render() {
      return (
          <div>
            <button className="haha" onClick={this.onClick}>+</button>
            <span>{this.state.num}</span>
          </div>
      )
  }
}