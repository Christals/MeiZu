"use strict";function sendAjax(e,t){var a=new XMLHttpRequest,n={type:"GET",data:null,contentType:"json"};if(Object.assign(n,t),"GET"==n.type.toUpperCase()){var s=-1<e.indexOf("?")?"&":"?";for(var c in e+="".concat(s,"_=").concat(Date.now()),n.data)e+="&".concat(c,"=").concat(n.data[c]);n.data=null}else"POST"==n.type.toUpperCase()&&(n.data=JSON.stringify(n.data));a.open(n.type,e,!0),a.send(n.data),a.onreadystatechange=function(){if(4==a.readyState){if(200==a.status){var e=a.responseText;n.success&&n.success(e)}else n.error&&n.error(e);n.complete&&n.complete(e)}}}