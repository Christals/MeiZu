var shop_car = (function(){
    return {
        init() {
            this.getJson();
            this.event()
        },
        event() {
            var _this = this;
        },
        getJson() {
            var shopList = localStorage.shopList || '[]';
            shopList = JSON.parse(shopList);
            this.insertData(shopList);
        },
        insertData(data) {
            console.log(data)
        },
        setData() {
            
        }
    }
}())
shop_car.init();