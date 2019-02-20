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
            //获取和克隆第一张和最后一张
            // $firstImg=$imgBox.firstElementChild;
            // $lastImg=$imgBox.lastElementChild;
            // $imgBox.appendChild($firstImg.cloneNode(true));
            // $imgBox.insertBefore($lastImg.cloneNode(true),$firstImg);
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

