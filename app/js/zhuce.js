var $btn = document.querySelector('#btn-zc');
$btn.onclick = function(e) {
    e = e ||window.event;
    e.preventDefault();
    sendAjax('admin/zhuce.php', {
        type:'POST',
        data:{
            username:$form['username'].value,
            paserward:$form['paserward'].value,
            paserward:$form['telephone'].value,
        },
        success(data){
            console.log(data)
        }
    })
}