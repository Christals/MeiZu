"use strict";function _defineProperty(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var $btn=document.querySelector("#btn-zc");$btn.onclick=function(e){(e=e||window.event).preventDefault(),sendAjax("admin/zhuce.php",{type:"POST",data:_defineProperty({username:$form.username.value,paserward:$form.paserward.value},"paserward",$form.telephone.value),success:function(e){console.log(e)}})};