/**
 * Created by lihualong on 2017/6/17.
 */

//let base = 'http://192.168.1.100:8080/hhdj';
let base = 'http://localhost:8081/hhdj';

export  default {
  //验证码
  checkCode:`${base}/validatecode.jsp`,
  //上传图片
  uploadImage:`${base}/image/upload.do`,
  //上传文件
  uploadFile:`${base}/image/upload.do`,
  //登录
  login:`${base}/login/login.do`,
  //登出
  logout:`${base}/login/logout.do`,
  //修改密码
  updatePass:`${base}/login/updatePwd.do`,
  //检查登录状态
  checkSession:`${base}/login/checkSession.do`,
  //新闻列表
  getNewsList:`${base}/news/newsList.do`,
  //新闻详情
  getNewsInfo:`${base}/news/newsContent.do`,
  saveNews:`${base}/news/save.do`,
  updateNews:`${base}/news/update.do`,
  deleteNews:`${base}/news/delete.do`,
 //用户
  getUserList:`${base}/user/userList.do`,
  importUsers:`${base}/user/importExcel.do`,
  getIntegralList:`${base}/integral/integralList.do`,
  setUserState:`${base}/user/isDisable.do`,
  resetUserPwd:`${base}/user/resetPwd.do`,

  //互动
  getTopicList:`${base}/forum/forumList.do`,
  getFollowList:`${base}/forum/forumCommentList.do`,
  deleteTopic:`${base}/forum/deleteForum.do`,
  deleteFollow:`${base}/forum/deleteComment.do`,

  //心得总结
  getImpressList:`${base}/impress/impressList.do`,
  checkImpress:`${base}/impress/checked.do`,
  //思想汇报
  getReportList:`${base}/report/reportList.do`,
  checkReport:`${base}/report/checked.do`,
  //轮播图
  getCarouselList:`${base}/carousel/carouselList.do`,
  addCarousel:`${base}/carousel/addCarousel.do`,
  deleteCarousel:`${base}/carousel/delCarousel.do`,
  updateCarousel:`${base}/carousel/modifyCarousel.do`,

  //民主评议
  getCommentList:`${base}/nationComment/nationCommentList.do`,
  addComment:`${base}/nationComment/addComment.do`,
  updateComment:`${base}/nationComment/modifyComment.do`,
  changeCommentStatus:`${base}/nationComment/modifyStatus.do`,
  getDemocracyUserList:`${base}/nationComment/democracyUserList.do`,
  getCommentDetail:`${base}/nationComment/commentDetail.do`,
//党支部列表
  getBranchList :`${base}/branch/findAll.do`

}
