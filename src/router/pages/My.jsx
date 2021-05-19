import React from 'react'

/**
 * 
 * 
 * 
 */

const My = (props) => {
  console.log(props, 'my');
  const onLink = ()=> {
    props.history.push({pathname: '/', state: {name:'query'}})
    // props.history.push({pathname: '/', state: {name:'query'}})
  }
  const styles = {
    'background': 'blue',
    'height': '2000px'
  }
  return (
    <div style={styles}>
      <h3>My</h3>
      <button onClick={onLink}>跳转首页</button>
    </div>
  )
}

export default My