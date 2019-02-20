var baidu = (function() {
    var $inp = document.querySelector('#meizu');
    var $ul = document.querySelector('.result');
    var timer = null;
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $inp.onfocus = function() {
                this.oninput();
            }
            $inp.oninput = function() {
                clearTimeout(timer);
                var val = this.value;
                if(val == '') {
                    _this.hidden()
                } else {
                    _this.show();
                    timer = setTimeout(() => {
                        _this.getJson(val);
                    }, 500)
                }
            }
            $inp.onblur = function() {
                set (() => {
                    _this.hidden();
                }, 200)
            }
            $ul.onclick = function(e) {
                console.log('click');
                e = e || window.event;
                // 获取目标元素
                var target = e.target || e.srcElement;
                if(target.nodeName === 'LI') {
                    var text = target.innerHTML;
                    $inp.value = text;
                }

            }
        },
        show() {
            $ul.style.display = 'block';
        },
        hidden() {
            $ul.style.display = 'none';
        },
        getJson(val) {
            var url = 'https://lists.meizu.com/search/primary/autocomplete'
            sendJonp(url, {
                wd: val,
                cb: "baidu.insertData"
            }) 
        },
        insertData(data) {
            $ul.innerHTML = '';
            // console.log(data);
            var $frag =  document.createDocumentFragment()
            data.s.forEach(x => {
                var $li = document.createElement("li");
                // $li.onclick = function() {

                // }
                $li.innerHTML = x;
                $frag.appendChild($li);
            })
            $ul.appendChild($frag);
        }
    }
}())