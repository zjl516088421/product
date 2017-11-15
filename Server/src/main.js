
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '@/font/iconfont.css'
import axios from 'axios'
import {checkLogin} from './api/api'

//数据模拟
// import mock from './mock/mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

var app=new Vue({
  el: '#app',
  router,
  store,
  created(){
    checkLogin().then(function (res) {
      if(res.data&&res.data.code==1){
        store.commit('login',true);
      }
      else{
        router.push('/login');
      }
    })
  },
  template: '<App/>',
  components: { App }
})


//响应拦截器
axios.interceptors.response.use(function(res){
  //如果是未登录
  if(res.data&&res.data.code==2){
    app.$alert('登录用户已超时，请重新登录', '提示', {
      confirmButtonText: '确定',
      type:'warning',
      closeOnClickModal:false,
      callback: action => {
        router.push('/login')
      }
    });
  }
  return res;
},function(err){
  return Promise.reject(err);
})

/*路由验证*/
router.beforeEach((to, from, next) => {
  if(to.path==='/login'){
    next();
  }else{
    if(!store.state.user){
      next({ path: '/login' });
    }else{
      next();
    }
  }
})
