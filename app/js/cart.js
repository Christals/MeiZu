// 根据勾选的商品的数量计算总价
function fn() {
    var $xz = $('.xz');
	var priceAll = 0;
	//console.log($xz);
	for(var k = 0; k < $xz.length; k++) {
		//console.log($xz[k].className == 'mz_ck xz checked');
		if($xz[k].className == 'mz_ck xz checked') {
			var $t = $($xz[k]);
			var single_price = $t.parent().parent().find('.p_price').text();
			var sp_number = $t.parent().parent().find('.inp_num').text();
			//var zj_total = (Number(single_price) * parseInt(sp_number)).toFixed(2);
			var zj_total = Number(single_price) * Number(sp_number);
			//var num_sub = zj_total;
			//console.log(zj_total);
			priceAll += zj_total;
		}
	}
	//console.log(priceAll);
	$(".hj_price").html(priceAll);//总价
}

$(function() {
	// 把localStorage中的商品数据渲染到页面中
	if(localStorage.getItem('meizu')) {
		var i = localStorage.getItem('meizu');
		var arr = JSON.parse(i);
        var xz_num = arr.length; //获取商品数量
        var qx_num = 0; //声明有几个选中商品
        var b = true;//判断是否编辑
		for(var i = 0; i < arr.length; i++) {
			var obj = arr[i];
            // console.log(obj)
            var product =`
            <tr class="cart_product">
                <td class="cart_select">
                    <div class="mz_ck xz"></div>
                    <a href="product_detail.html" class="product_link">
                        <img src="${obj.imgurl}" alt="">
                    </a>
                    <a href="product_detail.html" class="product_link product_info">
                        <p class="product_name">${obj.title}</p>
                        <p class="product_color">${obj.iphoneColor}</p>
                    </a>
                </td>
                <td class="cart_price">
                    <span class="p_price">${obj.price}</span>
                </td>
                <td class="cart_number">
                    <div class="num_edit">
                        <div class="editor">
                            <button class="num_minus"></button>
                            <div class="show_num">
                                <!--<input type="text" class="inp_num" value='1' />-->
                                <a class="inp_num">${obj.tok}</a>
                            </div>
                            <button class="num_add"></button>
                        </div>
                    </div>
                </td>
                <td class="cart_total">
                    <span class="cart_price total">${obj.tok * obj.price}</span>
                </td>
                <td class="cart_ctrl">
                    <div class="product_remove"></div>
                </td>
            </tr>`
			product = $(product);
			$('.cart_body').append(product);
        }
		//点击减去商品
		$('.num_minus').on('click', function() {
			var target = $(event.target)
			var num = Number(target.next().text());		 			
            num--;
			if(num <= 1) {
                num = 1;
                $('.num_minus').addClass("disabled");
            }
            else{
                $('.num_minus').removeClass("disabled");
            }
			target.next().children().html(num);
			target.parent().parent().parent().next().children().html(target.next().text() * target.parent().parent().parent().prev().children().text())
			fn();
		})
		// 点击加商品
		$('.num_add').on('click', function() {
			var target = $(event.target)
			var num = Number(target.prev().text());
			num++;
			target.prev().children().html(num);
			target.parent().parent().parent().next().children().html(target.prev().text() * target.parent().parent().parent().prev().children().text())
			fn();
        })
        // 全选商品
		$('.select_all').click(function() {
			$('.select_all .mz_ck').toggleClass('checked');
			if($('.select_all .mz_ck').attr('class') == 'mz_ck checked') {
				$('.cart_select .xz').addClass('checked');
				qx_num = arr.length;
				$('.cart_check_num').html(qx_num);
				fn();

			}  
			else if($('.select_all .mz_ck').attr('class') == 'mz_ck') {
				$('.cart_select .xz').removeClass('checked');
				qx_num = arr.length;
				$('.cart_check_num').html(qx_num);
				fn();
			}
			//fn1();
        })
        // 商品单独勾选
		$('.xz').on('click', function() {
			var target = $(event.target);
            target.toggleClass('checked');
            // 获取所有选中商品
			var $cart_xz = document.querySelectorAll('.xz ');
            // 单选初始值
			var dx_num = 0;
			for(var i = 0; i < $cart_xz.length; i++) {
				if($cart_xz[i].className == 'mz_ck xz checked') {
					dx_num += 1;
					//console.log(dx_num);
				}
			}
			if(dx_num == $cart_xz.length){
				$('.select_all .mz_ck').addClass('checked');
				fn();
			}
			if($(target).attr('class') == 'mz_ck xz'){
				$('.select_all .mz_ck').removeClass('checked');
				fn();
			}
			fn();
			$('.cart_check_num').html(dx_num);
        })
        // 点击编辑改变样式
        $('.edit').click(function() {
            if (b) {
                $('.edit').html( "编辑" );  
                $('.cart_ctrl .product_remove').toggleClass('font_show',false);       
                b = false; //由于文字已更改，所以我们要改变变量的值 
            }else{
                $('.edit').html( "完成" );
                $('.cart_ctrl .product_remove').toggleClass('font_show',true);
                b = true;
            }
        })
        //删除操作
        $('.cart_product').on('click', 'td', function() {
            var target = $(event.target);
            console.log(target.attr('class'));
			if(target.attr('class') == 'product_remove font_show' && $('.edit').text() == "完成") {
				target.parent().parent().remove();
				xz_num--;
				$('.cart_total_num').html(xz_num);
				fn();
				//fn1();
			}
		})
		$('.cart_total_num').html(xz_num);
		$('.cart_check_num').html(qx_num);
    } 
    else{
        var emptyCart = `
		<div class="cart_empty ">
			<div class="cart_content">
				<div class="cart_left"></div>
				<div class="cart_right">
					<div class="cart_title">您还没有登录！</div>
					<div class="cart_hint">登录后可显示您账号中已加入的商品哦~</div>
					<div class="tips_btn"><a href="#" class="btn_login">去登陆</a></div>
				</div>
			</div>
		</div>`
        emptyCart = $(emptyCart);
        $('#main').html(emptyCart);
        // $('#main').css({
        //     'font-size': '40px',
        //     color: '#000',
        //     'text-align': 'center',
        //     'line-height': '100px'
        // })
    }

})