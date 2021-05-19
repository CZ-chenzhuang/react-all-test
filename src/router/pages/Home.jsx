import React from 'react'


const Home = (props) => {
  console.log(props, 'Home props');
  const onLink = () => {
    props.history.push({pathname: '/my', state:{ name: 'my' }})
  }

  return (
    <div>
      <h3>HOME</h3>
      <button onClick={onLink}>跳转我的管理页面</button>
    </div>
  )
}

export default Home