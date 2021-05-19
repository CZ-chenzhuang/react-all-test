import React from 'react';
import { connect } from 'react-redux';
import { changeAdminName, getAdminList } from './store/actionCreators';

const Index = (props) => {
  const { name, list, loading } = props;

  const changeName = () => {
    props.handleChageName('new name');
  }
  
  const getData = () => {
    props.getAdminList()
  }

  const List = () => {
    return list.map(item => (
      <div key={item.id}>{item.id} - {item.name}</div>
    ))
  }

  return (
    <div>
      admin name: {name}
      <button onClick={changeName}>修改name</button>
      <h3>列表：</h3>
      {
        loading ?
        <span>loading.......</span> :
        <List></List>
      }
      <button onClick={getData}>请求列表</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.adminReducer.name,
  list: state.adminReducer.adminList,
  loading: state.adminReducer.loading
})

const mapDispatchToProps = (dispatch) => ({
  handleChageName(name) {
    dispatch(changeAdminName(name))
  },
  getAdminList() {
    dispatch(getAdminList())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index);