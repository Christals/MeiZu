var $form = document.querySelector('#form')
var $pAll = $form.querySelectorAll('p');
var $username = $form['username']
var $paserward = $form['paserward']
var $btn = document.querySelector('#btn_login');
$username.onblur = function () {
    var $p = this.nextElementSibling
    if (this.value == '') {
        $p.innerHTML = '内容不能为空';
        $p.className = 'bg-danger';
        return;
    }
    var reg = /^[A-Za-z_]{6,10}$/
    if (reg.test(this.value)) {
        $p.innerHTML = '验证成功';
        $p.className = 'bg-success';

    } else {
        $p.innerHTML = '格式错误,只能是6-10位,且只能是英文或者下划线';
        $p.className = 'bg-danger';
    }
}
$paserward.onblur = function () {
    var $p = this.nextElementSibling
    if (this.value == '') {
        $p.innerHTML = '内容不能为空';
        $p.className = 'bg-danger';
        return;
    }
    var reg = /^\w{6,15}$/
    if (reg.test(this.value)) {
        $p.innerHTML = '验证成功';
        $p.className = 'bg-success';

    } else {
        $p.innerHTML = '请输入6-15位的密码, 且为数字字母下划线';
        $p.className = 'bg-danger';
    }
}
$btn.onclick = function () {
    for (var i = 0; i < $pAll.length; i++) {
        if ($pAll[i].className != 'bg-success') {
            //    让文本框获取焦点
            $pAll[i].previousElementSibling.focus();
            return;
        }
    }
    alert('全部验证成功')
}