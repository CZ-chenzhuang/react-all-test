import React, { useState, useMemo } from 'react'
import Child from './useState'

export default function Index() {
  const [num, setNum] = useState(initNum)
  const [data, setData] = useState('data')
  function initNum() {
    const num = Math.random() * 2
    console.log(num)
    return num
  }
  function test() {}
  const value = {data}
  return (
    <div>
      {/* <p>num: {num}</p> */}
      {/* <button onClick={() => {setNum(num + 1)}}>+</button> */}
      <Child data={value}/>
    </div>
  )
}