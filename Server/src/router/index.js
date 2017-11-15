import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '../components/manager/Login'
import Home from '../components/main/Home'
import Explain from '../components/Explain'
import AddNews from '../components/news/AddNews'
import NewsList from '../components/news/NewsList'
import UserList from '../components/user/UserList'
import TopicList from '../components/forum/TopicList'
import ReportList from '../components/report/ReportList'
import ImpressList from '../components/impress/ImpressList'
import Publish from '../components/comment/Publish'
import CommentList from '../components/comment/CommentList'
import CarouselList from '../components/carousel/CarouselList'
import UpdatePass from '../components/manager/UpdatePass'
import  DemocracyUserList from '../components/comment/DemocracyUserList.vue'

Vue.use(VueRouter);

let routes=[
  { path: '/', redirect: '/login',hidden:true },
  {
      path: '/login',
      name: 'Login',
      component: Login,
      authorization:false,
      hidden:true
    },
  {
    path:'/home',
    name:'用户管理',
    icon:'icon-yonghuguanli',
    component:Home,
    children:[
      /*{name:'添加新闻',path:'/addnews',component:AddNews},*/
      {name:'用户列表',path:'/userlist',component:UserList}
    ]
  },
  {
    path:'/home',
    name:'党员互动',
    icon:'icon-pinglun',
    component:Home,
    children:[
      {name:'帖子列表',path:'/topiclist',component:TopicList}
    ]
  },
  {
    path:'/home',
    name:'轮播图',
    icon:'icon-lunbozutu',
    component:Home,
    leaf: true,
    children:[
      {name:'轮播图列表',path:'/carousellist',component:CarouselList}
    ]
  },
  {
    path:'/home',
    name:'民主评议',
    icon:'icon-minzhu',
    component:Home,
    children:[
      {name:'发起评议',path:'/publishcomment',component:Publish},
      {name:'评议列表',path:'/commentlist',component:CommentList},
    ]
  },

  {
    path:'/home',
    name:'心得总结',
    icon:'icon-gongzuozongjie',
    component:Home,
    children:[
      {name:'总结列表',path:'/impresslist',component:ImpressList},
    ]
  },
  {
    path:'/home',
    name:'思想汇报',
    icon:'icon-huibao-',
    component:Home,
    children:[
      {name:'汇报列表',path:'/reportlist',component:ReportList},
    ]
  },
  {
    path:'/home',
    name:'新闻管理',
    icon:'icon-xinwen',
    component:Home,
    children:[
      {name:'添加新闻',path:'/addnews',component:AddNews},
      {name:'新闻列表',path:'/newslist',component:NewsList}
    ]
  },
  {
    path:'/home',
    name:'系统说明',
    icon:'icon-shuoming',
    component:Home,
    leaf: true,//只有一个节点
    hidden:true,
    children:[
      {name:'说明',  path:'/explain',component:Explain}
    ]
  },
  {
    path:'/homes',
    name:'民主评议用户',
    component:Home,
    hidden: true,
    children:[
      {name:'DemocracyUserList', path:'/democracyUserList/:commentId',component:DemocracyUserList}
    ]
  }
  ]

const router = new VueRouter({
  routes
})
export default router;

