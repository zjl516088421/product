import axios from 'axios';
import config from './config'
var qs = require('qs');
/*配置支持cookie*/
axios.defaults.withCredentials = true;

export const allNewsType=[
  {
    type:0,
    text:"信工新闻眼"
  },
  {
    "type":1,
    "text":"特色活动",
  },{
    "type":2,
    "text":"通知早知道",
  },{
    "type":3,
    "text":"党建一点通",
  },{
    "type":4,
    "text":"制度建设",
  },{
    "type":5,
    "text":"党员风采",
  },{
    "type":6,
    "text":"随时随地学",
  },{
    "type":7,
    "text":"随时随地拍",
  },{
    "type":8,
    "text":"政治学习",
  }]
export const checkCodeUrl=config.checkCode;

/*
* 新闻
* */

/*获取新闻列表*/
export const getNewsList= params=>{
  return axios.get(config.getNewsList,{params:params});
}

export const getNewsInfo=params=>{
  return axios.get(config.getNewsInfo,{params:params})
}

/*创建新闻*/
export const saveNews=formdata=>{
  return axios.post(config.saveNews,formdata);
}

/*修改新闻*/
export const updateNews=formdata=>{
  return axios.post(config.updateNews,formdata);
}

/*删除新闻*/
export const deleteNews=params=>{
  return axios.get(config.deleteNews,{params:params});
}

/*
* 基础接口
* */

/*上传文件*/
export const uploadFile=formdata=>{
  return axios.post(config.uploadFile,formdata);
}

/*
* 管理员
* */
export const logout=()=>{
  return axios.get(config.logout);
}

export  const updatePwd=params=>{
  return axios.get(config.updatePass,{params:params});
}

export const login=data=>{
  return axios.post(config.login,createPostParams(data))
}
export const checkLogin=()=>{
  return axios.get(config.checkSession);
}

/*
* 用户
* */
export const getUserList=params=>{
  return axios.get(config.getUserList,{params:params})
}
/* excel 导入用户*/
export const importUsers=formdata=>{
  return axios.post(config.importUsers,formdata)
}
export const getIntegralList=params=>{
  return axios.get(config.getIntegralList,{params:params});
}

export  const setUserState=data=>{
  return axios.post(config.setUserState,createPostParams(data));
}
export  const resetUserPwd=params=>{
  return axios.get(config.resetUserPwd,{params:params})
}


/*
* 互动
* */
/*帖子列表*/
export const getTopicList=params=>{
  return axios.get(config.getTopicList,{params:params});
}
export const deleteTopic=params=>{
  return axios.get(config.deleteTopic,{params:params});
}
export const getFollowList=params=>{
  return axios.get(config.getFollowList,{params:params});
}
export const deleteFollow=params=>{
  return axios.get(config.deleteFollow,{params:params});
}

/*
* 总结
* */
/*总结列表*/
export  const getImpressList=params=>{
  return axios.get(config.getImpressList,{params:params})
}
/*审核总结*/
export const checkImpress=data=>{
  return axios.post(config.checkImpress,data);
}


/*
* 汇报
* */

/*思想汇报列表*/
export  const getReportList=params=>{
  return axios.get(config.getReportList,{params:params})
}

/*审核思想汇报*/
export const checkReport=data=>{
  return axios.post(config.checkReport,data);
}

/*
* 轮播图
* */
/*轮播图列表*/
export const getCarouselList=params=>{
  return axios.get(config.getCarouselList,{params:params});
}
/*添加轮播图*/
export const addCarousel=formdata=>{
  return axios.post(config.addCarousel,formdata);
}
/*修改轮播图*/
export const updateCarousel=params=>{
  return axios.get(config.updateCarousel,{params:params});
}
/*删除轮播图*/
export const deleteCarousel=params=>{
  return axios.get(config.deleteCarousel,{params:params});
}

/*
* 民主评议
* */
/*民主评议列表*/
export const getCommentList=params=>{
  return axios.get(config.getCommentList,{params:params});
}
/*添加民主评议*/
export const addComment=data=>{
  return axios.post(config.addComment,data);
}
/*修改民主评议*/
export const updateComment=data=>{
  return axios.post(config.updateComment,data);
}
/*更改民主评议状态*/
export const changeCommentStatus=data=>{
  return axios.get(config.changeCommentStatus,{params:data});
}
//获取党支部列表
export const getBranchList=params=>{
  return axios.get(config.getBranchList,{params:params})
}
//获取提交个人总结的党员列表
export const getDemocracyUserList=params=>{
  return axios.get(config.getDemocracyUserList,{params:params})
}
//获取个人总结详情
export  const getCommentDetail=params=>{
return axios.get(config.getCommentDetail,{params:params})
}


/*
* 创建Post x-www-form-urlencode请求参数
* */
function createPostParams(obj) {
  return qs.stringify(obj);
}
