btn_login.onclick = function(){
    sendAjax('admin/login.php', {
        type:'PSST',
        data:{
            username:$form['username'].value,
            paserward:$form['paserward'].value,
        },
        success(data){
            console.log(data)
        }
    })
}