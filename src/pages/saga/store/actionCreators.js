import * as actionTypes from './constants';

export const changeLoading = (isLoading) => ({
  type: actionTypes.CHANGE_LOADING,
  data: isLoading
})

export const changeUser = (name) => ({
  type: actionTypes.CHANGE_USERINFO,
  data: name
})

// export const getBannerList = () => {
//   return (dispatch) => {
//     getBannerRequest().then (data => {
//       dispatch (changeBannerList (data.banners));
//     }).catch (() => {
//       console.log ("轮播图数据传输错误");
//     }) 
//   }
// };