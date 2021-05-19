import React from 'react'
import { unstable_batchedUpdates as batchedUpdates } from 'react-dom'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }
  /**
   * 
   * */ 
  onAdd = () => {
    this.setState({num: this.state.num + 1}, () => {
      console.log(this.state.num, 'callback')
    })
    console.log(this.state.num);
    this.setState({num: this.state.num + 1}, () => {
      console.log(this.state.num, 'callback')
    })
    console.log(this.state.num);
  }
  handleAdd = () => {
    setTimeout(() => {
      this.onAdd()
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.handleAdd}>+</button>
      </div>
    )
  }
}