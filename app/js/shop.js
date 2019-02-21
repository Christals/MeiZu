var shop = (function(){
    return {
        init(){
            this.getJson();
            this.event()

        },
        event(){
            var _this = this;
        },
        getJson(){
            var _this = this;
            sendAjax('json/shop.json',{
                success(data){
                    _this.insertData(JSON.parse(data));
                }
            })                      
        },      
        insertData(data){
            if(data.code == 200){
                var alldata = data.data
                // console.log(alldata);
                
            }else{
                alert('你没有获取数据的权限')
            }
            
        }
    }
}())
shop.init()