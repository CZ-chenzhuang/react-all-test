import React from 'react'

export default class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
  }
  componentDidMount() {
    console.log('Index componentDidMount')
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Index componentDidUpdate')
  }
  onAdd = () => {
    this.setState({num: this.state.num + 1})
  }
  render() {
    return (
      <div>
        Parent: <button onClick={this.onAdd}>+</button>
        <Son num={this.state.num}></Son>
      </div>
    )
  }
}

class Son extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'son'
    }
  }
  componentDidMount() {
    console.log('Son componentDidMount')
  }
  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log(prevProps, prevState, snapShot)
    console.log('Son componentDidUpdate')
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Son getSnapshotBeforeUpdate', prevProps)
    return {name: 1}
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Son getDerivedStateFromProps', props)
    return {test: 'test'}
  }
  render() {
    console.log('Son render')
    console.log(this.state)
    const {num} = this.props
    return (
      <div>
        Son：{num} {this.state.name}
      </div>
    )
  }
}