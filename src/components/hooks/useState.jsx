import React, { useState } from 'react'

/**
 * useState第一个参数可以传递一个函数，返回一个经过复杂计算得到的初始state，只会执行一次
 * useState不像setState那样合并属性，如果需要，使用扩展运算符实现合并
 * useState不像setState, useState如果修改的值不变，不会重新渲染
 * */ 


// useState不像setState那样合并属性，如果需要，使用扩展运算符实现合并
// export default function Index1(props) {
//   const [info, setInfo] = useState({name: 'xiaoming', age: 12})
//   return (
//     <div>
//       子组件: {info.name}: {info.age}
//       <button onClick={() => {setInfo({...info, age: info.age + 1})}}>+</button>
//     </div>
//   )
// }

// useState不像setState, useState如果修改的值不变，不会重新渲染
// export default function Index2() {
//   const [num, setNum] = useState(0)
//   console.log('re-render')
//   return (
//     <div>
//       {num}
//       <button onClick={() => {setNum(0)}}>+</button>
//     </div>
//   )
// }

export default class Child extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    console.log('re-render')
    return (
      <div>
        <span>{this.props.data.data}</span>
      </div>
    )
  }
}

//  function Index(props) {
//   console.log('re-render');

//   return (
//     <div>
//       <span>{props.data}</span>
//     </div>
//   )
// }
// export default React.memo(Index)