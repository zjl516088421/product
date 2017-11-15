export default (config)=>{
   let {name,url,accept,onchange,onupload}=config;
   let intput=_init();

   function _init() {
     var input=document.createElement('input');
     input.type='file';
     input.name=name;
     input.accept=accept;
     input.click();
     input.onchage=_onchage();
     return input;
   }

   function _onchage() {
     if(input.files.length==0){
       return;
     }

     var reader=new FileReader();
     reader.readAsDataURL(input.files[0]);
     reader.onload=()=>{
       if(onchage){
         onchage(this.result);
       }
       sendData(this.result,input.files[0].type)
     }


   }

   function sendData(dataurl,mime) {
     let fmData = new FormData();
     let ext=mime.substr(mime.indexOf('/'));
     fmData.append(name, data2blob(dataurl, mime), name + '.' + ext);
     let client = new XMLHttpRequest();
     client.withCredentials = true;
     client.open('POST', url, true);
     client.onreadystatechange = function() {
       if (this.readyState !== 4) {
         return;
       }
       if (this.status === 200 || this.status === 201) {
         _onupload(client.responseText);
       } else {

       }
     };
     client.send(fmData)
   }

   function _onupload(text) {
     var data= JSON.parse(text);
     if(onupload){
       onupload(data);
     }
   }

   function data2blob(data, mime) {
    // dataURL 的格式为 “data:image/png;base64,****”,逗号之前都是一些说明性的文字，我们只需要逗号之后的就行了
    data = data.split(',')[1];
    data = window.atob(data);
    var ia = new Uint8Array(data.length);
    for (var i = 0; i < data.length; i++) {
      ia[i] = data.charCodeAt(i);
    };
    // canvas.toDataURL 返回的默认格式就是 image/png
    return new Blob([ia], {
      type: mime
    });
  };

}
