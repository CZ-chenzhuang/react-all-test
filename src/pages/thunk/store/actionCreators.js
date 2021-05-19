import * as actionTypes from './constants';

export const changeAdminName = (name) => ({
  type: actionTypes.CHANGE_NAME,
  data: name
});

export const changeLoading = (isLoading) => ({
  type: actionTypes.CHANGE_LOADING,
  data: isLoading
})

export const changeList = (list) => ({
  type: actionTypes.CHANGE_LIST,
  data: list
})

export const getAdminList = () => {
  return (distch, getState) => {
    distch(changeLoading(true))
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = [{name: 'react', id: 2}, {name: 'webpack', id: 3}]
        resolve(data)
      }, 2000)
    }).then(res => {
      distch(changeList(res))
    }).catch(err => {

    })
  }
}
// export const getBannerList = () => {
//   return (dispatch) => {
//     getBannerRequest().then (data => {
//       dispatch (changeBannerList (data.banners));
//     }).catch (() => {
//       console.log ("轮播图数据传输错误");
//     }) 
//   }
// };