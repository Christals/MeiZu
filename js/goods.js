var wrapper=(function(){
    var $box,$ulBox,$ul,$tipBox,index = 0,timer=null,a=0;
    return{
        init(){
            //获取大盒子
            $box=document.querySelector('.recomment');
            //获取封装ul的盒子
            $ulBox=document.querySelector('.recomment_box');
            //获取所有ul
            $ul=$ulBox.children;
            //获取小圆点的盒子
            $tipBox=$ulBox.nextElementSibling;
            $tipLi =$tipBox.children;
            //给每个小圆点加上index属性
            for (let i = 0; i < $tipLi.length; i++) {
                $tipLi[i].index = i ;
            }
            //获取移动的宽度
            ulWidth = $box.clientWidth;         
            // $ulBox.style.left = -ulWidth + 'px';
            //获取和克隆第一张和最后一张
            // $firstUl=$ulBox.firstElementChild;
            // $lastUl=$ulBox.lastElementChild;
            // $ulBox.appendChild($firstUl.cloneNode(true));
            // $ulBox.insertBefore($lastUl.cloneNode(true),$firstUl);
            this.event();
            console.log(ulWidth);
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
            // this.autoPlay();

        },
        showImg(){
            if (index < 0) {
                index = $tipLi.length - 1;
                //$imgLi[index].style.left = $imgLi.length -1;
            }
            else if(index > $tipLi.length - 1){
                index = 0;
                // $imgLi[index].style.zIndex = $imgLi.length -1;
            }
            for (let i = 0; i < $tipLi.length; i++) {
                $tipLi[i].classList.remove('on');
            }
            $tipLi[index].classList.add('on');
            move($ulBox,'left',-ulWidth*index,1000);    
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

