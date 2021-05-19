import React from 'react';
import { connect } from 'react-redux';
import { changeUser } from './store/actionCreators'

const Index = (props) => {
  const info = props.userInfo ? `name: ${props.userInfo.name}  age: ${props.userInfo.age}` : '无'
  const getUserInfo = () => {
    props.getUserInfoAction()
  }
  return (
    <div>
      <h4>hello saga!</h4>
      <p>用户信息：</p>
      <div>
        {info}
      </div>
      <button onClick={getUserInfo}>获取用户数据</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserInfoAction() {
    dispatch(changeUser('user'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)
