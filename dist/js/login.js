"use strict";btn_login.onclick=function(){sendAjax("admin/login.php",{type:"POST",data:{username:$form.username.value,paserward:$form.paserward.value},success:function(e){console.log(e)}})};