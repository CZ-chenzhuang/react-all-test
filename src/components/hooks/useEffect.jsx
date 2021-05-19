import React, { useState, useEffect, useRef } from 'react'



// 1.useEffect中的函数每一次执行，都会一个新的函数，会记录当时组件重新渲染时的prop和state
// export default function Index() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     setTimeout(() => {
//       console.log(count);
//     }, 3000)
//   })
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => {setCount(count + 1)}}>+</button>
//     </div>
//   )
// }

/**
 * 1.1  由于1中的特性，下面例子错误。因为useEffect的依赖项是空数组，所以回调函数只执行一次，函数中的count记录的一直是初次渲染时的值。
 * 解决方法: a、依赖项增加count，每次渲染重新绑定事件，使用useEffect返回解绑事件，开销太大。
 *          b、使用setCount函数的写法，setCount(prev => ++prev)
 *          c、使用useRef，因为useRef创建的对象一只是同一个引用
 * */ 
// export default function Index() {
//   const [count, setCount] = useState(0)
//   const myRef = useRef()
//   useEffect(() => {
//     myRef.current.addEventListener('click', () => {
//       setCount(count + 1)
//     })
//   }, [])
//   return (
//     <div ref={myRef}>{count}</div>
//   )
// }
export default function Index() {
  const [count, setCount] = useState(0)
  const myRef = useRef()
  const countRef = useRef(count)
  useEffect(() => {
    myRef.current.addEventListener('click', () => {
      setCount(++countRef.current)
    })
  }, [])
  return (
    <div ref={myRef}>{count}</div>
  )
}


// 2.useEffect中的函数返回的清除函数，会在一次重新渲染时，先于外层函数执行，记录的prop和state是上一次当时的值
// export default function Index() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     console.log(count)
//     return () => {
//       console.log(count)
//     }
//   })
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => {setCount(count + 1)}}>+</button>
//     </div>
//   )
// }


// export default function Index() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     // const id = setInterval(() => {
//     //   setCount(count + 1);
//     // }, 1000);
//     // return () => clearInterval(id);
//     // setTimeout(() => {
//     //   setCount(count + 1)
//     // }, 1000)
//   }, [count]);

//   return <h1>{count}</h1>;
// }
