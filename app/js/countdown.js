var countDown = (function () {
    return {
        init: function (ele) {
            this.$ele = document.querySelector(ele);
            this.$liAll = this.$ele.querySelectorAll('li');
            this.$hours = this.$liAll[0];
            this.$minus = this.$liAll[2];
            this.$secs = this.$liAll[4];
            this.event();
        },
        event: function () {
            var _this = this;
            var countdownMinute = 20 * 60 * 60;//23小时倒计时
            var startTimes = new Date(new Date().setHours(0, 0, 0, 0));//开始时间当天0时0分;
            var endTimes = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-2);//结束时间 当天22时59分59秒
            var curTimes = new Date();//当前时间
            var surplusTimes = endTimes.getTime() / 1000 - curTimes.getTime() / 1000;//结束毫秒-开始毫秒=剩余倒计时间
            // 进入倒计时
            var countdowns = window.setInterval(function () {
                surplusTimes--;
                var hour = Math.floor(surplusTimes / 60 / 60 % 24)+'时';
                _this.$hours.innerHTML = hour;
                var minu = Math.floor(surplusTimes / 60 % 60)+'分';
                _this.$minus.innerHTML = minu; 
                var secd = Math.round(surplusTimes % 60)+'秒';
                _this.$secs.innerHTML = secd;
                // console.log(hour+ ':' + minu + ':' + secd);              
                if (surplusTimes <= 0) {
                    console.log('时间到！');
                    clearInterval(countdowns);
                _this.$hours.innerHTML = '00';
                _this.$minus.innerHTML = '00'; 
                _this.$secs.innerHTML = '00'; 
                }
            }, 1000);
        }
    }
}())