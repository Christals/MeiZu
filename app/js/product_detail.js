//商品数量加减
$(document).ready(function(){
    //获得文本框对象
    var t = $(".num_text");
    //初始化数量为1,并失效减
    $('.minus').attr('disabled',true);
    //数量增加操作
    $(".add").click(function(){    
        // 给获取的val加上绝对值，避免出现负数
        // t.val(Math.abs(parseInt(t.val()))+1);
        // if (parseInt(t.val()) >= 1){
        //     $('.minus').attr('disabled',false);
        // };
        t.val(parseInt(t.val())+1);    
        $(".minus").removeAttr("disabled"); 
        //setTotal();   
    }) 
    //数量减少操作
    $(".minus").click(function(){
        //判断数量值大于1时才可以减少    
        if (parseInt(t.val())>1) {                     
            t.val(parseInt(t.val())-1)   
            setTotal(); 
        }
        else{   
            //当$(".minus")为1时，$("#min")不可读状态     
            $(".minus").attr("disabled","disabled");        
        } 
    })
    function setTotal(){
        $(".pri_num").html((parseInt(t.val())* 1798.00).toFixed(2));
    }
    //setTotal();
})

//商品版本颜色选择事件
$('.pro_color a').click(function(e) { // 在页面任意位置点击而触发此事件
    $(this).siblings('a').removeClass('selected');
    $(this).addClass("selected");       // e.target表示被点击的目标
})
$('.price_bystage a').click(function(e) { // 在页面任意位置点击而触发此事件
    $(this).siblings('a').removeClass('selected');
    $(this).addClass("selected");       // e.target表示被点击的目标
})
// 把商品添加到购物车
$('.add_shopcar').delegate('a', 'click', function(e) {
    console.log(1);
    var target = $(event.target);
    var data;
    console.log(target);
    console.log(target.prop('tagName') == 'A');	//add_cart	
    if(target.prop('tagName') == 'A') {
        if(JSON.parse(localStorage.getItem('meizu'))) {
            var arr = JSON.parse(localStorage.getItem('meizu'))
            var num = 1;
            var fool;
            
            var amount = parseInt($(".num_text").attr("value"));
            //var amount = parseInt($(".num_text").text());
            var price = parseInt($('.pri_num').text());
            var iphoneColor = $(".selected span").text();
            var title = $('.buy_top h3').text();
            var imgurl = $('.show_img img').attr('src'); 
            // var str = $('.tuPianUrl').css('background-image').slice(4);
            // var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
            auto:for(var i = 0; i < arr.length; i++) {
                for(var k in arr[i]) {
                    if(arr[i].title == title && arr[i].iphoneColor == iphoneColor && arr[i].price == price && arr[i].imgurl == imgurl && arr[i].amount == amount) {
                        num = arr[i].tok + 1;
                        data = {
                            title: title,
                            amount: amount,
                            price: price,
                            iphoneColor: iphoneColor,
                            tok: num,
                            imgurl: imgurl
                        }
                        arr.splice(i, 1, data)
                        arr = JSON.stringify(arr);

                        localStorage.setItem('meizu', arr);
                        fool=i;
                        break auto;
                    }
                }
            }
            if(i != fool) {
                var arr = JSON.parse(localStorage.getItem('meizu'))
                data = {
                    title: title,
                    amount: amount,
                    price: price,
                    iphoneColor: iphoneColor,
                    tok: num,
                    imgurl: imgurl
                }
                arr.push(data);
                arr = JSON.stringify(arr);
                localStorage.setItem('meizu', arr);

            }
            console.log(arr);
        } 
        else 
        {
            var arr = [];
            var num = 1;
            var amount = parseInt($('.num_text').text());
            var price = parseInt($('.pri_num').text());
            var iphoneColor = $(".selected span").text();
            var title = $('.buy_top h3').text();
            var imgurl = $('.show_img img').attr('src'); 
            // var str = $('.tuPianUrl').css('background-image').slice(4);
            // var phoneurl = $('.tuPianUrl').css('background-image').slice(4).substring(0,str.length-1);
            data = {
                title: title,
                amount: amount,
                price: price,
                iphoneColor: iphoneColor,
                tok: num,
                imgurl: imgurl
            }
            arr.push(data);
            arr = JSON.stringify(arr);
            console.log(arr);
            localStorage.setItem('meizu', arr);
            console.log(localStorage.setItem('meizu', arr));
        }
    }
    //location.href = 'shop_car.html';
});