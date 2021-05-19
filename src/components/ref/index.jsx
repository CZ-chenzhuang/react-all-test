import React, { useState, useRef, useImperativeHandle } from 'react'

/**
 * 在类组件中使用React.createRef ，在函数组件中使用useRef。
 * 两种方式创建的都是一个对象，有current属性，指向的就是制定的元素或者类，但是有区别。
 * usesRef创建的ref对象在在整个生命周期里不会改变，使用 React.createRef ，每次重新渲染组件都会重新创建 ref。
 * ref 可以直接用在react元素上。也可用于类组件标签上，获取的是类的实例。函数组件不能使用ref获取。
 * ref不会当做props，传递到子组件。
 * 函数组件不可以直接用ref获取，可以使用ref转发，React.forwardRef。
 * 类组件也可以用React.forwardRef做ref转发，获取到类组件里的react元素。
 * forwardRef配合useImperativeHandle的hook，可以将函数组件中的属性方法导出，父组件中做操作（父组件可以是函数组件也可以是类组件）。
 * */ 
class Index extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
    this.child1Ref = React.createRef()
    this.child2Ref = React.createRef()
    this.child3Ref = React.createRef()
    this.parentRef = React.createRef()
  }
  state = {
    num: 1
  }
  componentDidMount() {
    console.log(this.inputRef);
    console.log(this.child1Ref);
    console.log(this.child2Ref);
    console.log(this.child3Ref);
    console.log( this.parentRef);
  }
  onAdd = (e) => {
    this.setState({ num: e.target.value})
  }
  onAddChild4 = () => {
    this.parentRef.current.onAdd()
    this.parentRef.current.child4InputRef.current.focus()
  }
  render(){
    return (
      <div>
        <h3>Parent</h3>
        <button onClick={this.onAddChild4}>Child4 ++</button><br/>
        <input type="text" ref={this.inputRef} value={this.state.num} onChange={this.onAdd}/>
        <Child1 ref={this.child1Ref} test age={1}/>
        <Child2 ref={this.child2Ref}/>
        <ChildWrapper3 ref={this.child3Ref}/>
        <Child4 ref={this.parentRef}/>
      </div>
    )
  }
}

// 普通用法，ref获取类组件实例
class Child1 extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return <div>child1</div>
  }
}

// 函数组件： 使用 React.forwardRef转发获取函数组件里的元素
const Child2 = React.forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
  const onAdd = () => {
    setCount(count + 1)
  }
  return (
    <div ref={ref}>
      <h3>Child2</h3>
      <span>{count}</span>
      <button onClick={onAdd}>+</button>
    </div>
  )
})

// 类组件： 使用 React.forwardRef转发获取类组件里的元素
const ChildWrapper3 = React.forwardRef((props, ref) => {
  class Child3 extends React.Component{
    constructor(){
      super()
    }
    render() {
      return <div ref={ref}><h3>Child3</h3></div>
    }
  }
  return <Child3 {...props}/>
})

// forwardRef配合useImperativeHandle的hook，可以将函数组件中的属性方法导出，父组件中做操作（父组件可以是函数组件也可以是类组件）
const Child4 = React.forwardRef((props, parentRef) => {
  const [count, setCount] = useState(0)
  const inputRef = useRef()
  useImperativeHandle(parentRef, () => ({
    child4InputRef: inputRef,
    onAdd: onAdd
  }))
  const onAdd = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h3>Child4</h3>
      <span>{count}</span>
      {/* <button onClick={onAdd}>+</button> */}
      <input type="text" ref={inputRef}/>
    </div>
  )
})

export default Index



