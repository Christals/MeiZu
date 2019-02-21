var wrapper=(function(){
    var $box,$imgLi,$imgBox,$tipBox,target,index = 0,timer=null,a=0,$tipLi;
    return{
        init(){
            //获取大盒子
            $box=document.querySelector('#header');
            //获取封装banner图片的盒子
            $imgBox=document.querySelector('.swiper_banner');
            //获取所有banner图片
            $imgLi =$imgBox.children;
            //给每个banner图片层级样式
            for (var i = 0; i < $imgLi.length; i++) {
                $imgLi[0].style.zIndex = 1;
                $imgLi[i].style.zIndex = 0;
            }
            //获取小圆点的盒子
            $tipBox=$imgBox.nextElementSibling;
            $tipLi =$tipBox.children;
            //给每个小圆点加上index属性
            for (var i = 0; i < $tipLi.length; i++) {
                $tipLi[i].index = i ;
            }
            this.event();
            //console.log($imgLi);
        },
        event(){
            var self = this;
            $tipBox.onclick = function(e){
                e = e || window.event;
                target = e.target || srcElement;
                index=target.index;
                self.showImg();
                // console.log(index);
            }
            this.autoPlay();

        },
        showImg(){
            if (index < 0) {
                index = $tipLi.length - 1;
                // $imgLi[index].style.zIndex = $imgLi.length -1;
            }
            else if(index > $tipLi.length - 1){
                index = 0;
                // $imgLi[index].style.zIndex = $imgLi.length -1;
            }
            for (var i = 0; i < $tipLi.length; i++) {
                $tipLi[i].classList.remove('on');
            }
            for (var i = 0; i < $imgLi.length; i++) {
                $imgLi[i].style.zIndex = 0;
            }
            $tipLi[index].classList.add('on');
            $imgLi[index].style.zIndex = 1;
            move($imgLi[index],'zIndex',1,1000);
            //function (){move($imgLi[index],'opacity',0,1000)}       
        },
        autoPlay(){
            clearInterval(timer);
            timer=setInterval(() => {
                index++;
                this.showImg();
            }, 2000);
        }
    }

}())
var subnav=(function(){
    var $box,$navul,$navLi,target,arr = [],index,timer=null;
    return{
        init(){
            //获取大盒子
            $box=document.querySelector('#header');
            //获取导航ul
            $navul=document.querySelector('.nav ul');
            //获取导航所有的li
            $navLi =$navul.children;
            //获取二级导航的集合
            $subnav=document.querySelectorAll('.sub_nav');
            // for (var j = $subnav.length-1; j < $navLi.length - 1; j++) { 
            //     $last_subnav =$subnav[$subnav.length-1];
            //     $section=document.createElement('section');
            //     $section.className='sub_nav';
            //     $sub.insertBefore($section,$last_subnav);
            // }
            //给每个下拉二级菜单加上类名
            for (var i = 0; i < $subnav.length; i++) {
                $subnav[i].classList.add('hidden') ;           
                // $subnav[i].style.display = 'none' ;
            }
            //给每个有nav的li加上index属性
            
            for (var i = 0; i < $navLi.length; i++) {
                if ($navLi[i].className == 'shownav' ) {
                    arr.push($navLi[i]);  
                }
            }
            for (var i = 0; i < arr.length; i++) {
                $navLi[i].index = i;
                
            }
            this.event();
            $subnav=document.querySelectorAll('.sub_nav');
            console.log(arr);
        },
        event(){
            var self = this;
            $navul.onmouseover = function(e){
                e = e || window.event;
                target = e.target || srcElement;
                index = target.index;
                console.log(index);
                target.onmouseenter = function (){
                    if (target.className == 'shownav') {
                        self.hidden();
                    }
                    else{
                        self.hidden();
                    }
                }    
            }
            $navul.onmouseleave = function(e){
                e = e || window.event;
                target = e.target || srcElement;
                index = target.index;
                target.onmouseleave =function (e){
                    if (target.className == 'shownav') {
                        self.hidden();
                    }
                }
                console.log(target); 
            }
        },
        show(){
            $subnav[index].classList.replace('hidden','show') ; 
            //move($imgLi[index],'zIndex',1,1000);
        },
        hidden(){
            $subnav[index].classList.replace('show','hidden') ; 
        }
    }

}())
