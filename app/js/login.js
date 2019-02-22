var $form = document.querySelector('#form');
        var $btn = document.querySelector('#btn_login');
        $btn.onclick = function(e) {
            e = e ||window.event;
            e.preventDefault();
            sendAjax('http://localhost:8888/meizu/admin/zhuce.php', {
                type: 'POST',
                data: {
                    username: $form['username'].value,
                    paserward: $form['paserward'].value
                },
                success(data) {
                    // console.log(data);
                    // 如果控制台报错, 
                    // Unexpected token < in JSON at position 0
                    // 说明data不是一个json字符串, 说明后台返回的数据有问题
                    // let {code , msg, data:_data} = JSON.parse(data);
                    // if(code == 200) {
                    //     var username = _data.name;
                    //     location.href  = 'manager.html';
                    // } else {
                    //     alert(msg);
                    // }
                    data = JSON.parse(data);
                    // console.log(data);
                    if(data.code == 200) {
                        var username = data.data.name;
                        localStorage.name = username;
                         location.href = 'manager.html';
                        //  console.log(username)
                        
                    } else {
                        alert(data.msg);
                    }
                }
            })
        }