/**
 * Created by lihualong on 2017/6/17.
 */
export const openFile=(name,accept)=>{
    var input=document.createElement('input');
    input.type='file';
    input.name=name;
    input.accept=accept;
    input.click();
    return input;
}

export const getUrlParam=(path,name)=>{
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = path.match(reg);
  if(r==null)r=window.location.pathname.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

export const dateFormat = (date,fmt)=>{ 
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}
