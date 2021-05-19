import React, { useMemo, useCallback, useState } from 'react'

/**
 * 1.当父组件重新渲染时，子组件也会重新渲染，类组件使用PureComponent进行优化，函数组件使用React.memo优化。
 * 2.PureComponent和memo都是进行的浅比较。如果给子组件传递对象或者函数之类的复杂数据类型，但父组件函数重新渲时，
 * 函数重新执行，生成新的对象和函数穿给子组件，即使对象等属性没变，但子组件还是会重新渲染。
 * 3.所以使用useMemo，useCallback来对复杂数据类型进行缓存，只有当useMemo的第二个参数，数组依赖项中的值改变时，
 * 才会返回新的数据，否则直接从存储在fiber的数据链表中取出缓存的数据，避免子组件重新渲染
 * 
*/



export default function Index() {
  const [num, setNum] = useState(0)
  const [name, setName] = useState('cz')
  const info = useMemo(() => ({num: num}), [num])
  const onAdd = useCallback(() => setNum(num + 1), [num])
  console.log('Index re-render')
  return(
    <>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <NewChild info={info} onAdd={onAdd}></NewChild>
    </>
  )
} 

function Child({info, onAdd}) {
  console.log('child re-render')
  return <button onClick={() => {onAdd()}}>+{info.num}</button>
}

// memo 第二个参数可以是函数，接收oldProps,newProps, 可以根据情况返回true代表相同，不重新渲染，返回false,代表不相同，重新渲染
const NewChild = React.memo(Child)
// function compare(oldProps, newProps) {
//   return oldProps.info.num === newProps.info.num
// }
