/**
 * Created by lihualong on 2017/6/17.
 */
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import config from '../api/config'
import {getUrlParam} from '../util/file'

var mock=new MockAdapter(axios,{ delayResponse: 2000 });

/*登录*/
mock.onPost(config.login).reply(function(config){
  let username=getUrlParam(config.data,'username');
  let password=getUrlParam(config.data,'password');
  console.log(username,password)
  if(username=='admin'&&password=='123456'){
    return[200,{code:1,message:'',user:{username:'aaa',id:''}}];
  }else{
      return [200, {
      code: 0,
      message: ''
    }];
  }
});


