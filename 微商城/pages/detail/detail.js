Page({
  data:{
 choice: "",
 currentStyleIndex: "",
 currentColorIndex:"",
 actionSheetHidden: true,
 style:[
   "蓝色吊坠链条",
   "红色吊坠链条",
   "紫色吊坠链条"
 ],
 color: [
   "蓝色",
   "红色"
 ],
 count: 1,
 listJewellery:{
        title: "【一恋倾星】 925纯银项链女 情侣闺蜜送礼",
        tips: "海洋之心吊坠送女友",
        minPrices: "99.00",
        maxPrices: "139.00",
        prices: "",
        freight: "免运费",
        stock: "1033",
        style: "款式",
        color: "颜色",
        
        chainMaterial: "银饰",
        metalMaterial: "925银",
        chainStyle: "水波链",
        material: "银",
        brand: "一恋倾星",
        pattern: "星座/生肖",
        mosaicMaterial: "纯银镶嵌宝石",
        form: "日韩",
        trialSex: "情侣",
        condition: "全新",
        goods: "现货",
        characteristic: "网聚特色"
      },
 imgUrls:[
      {
        "more_pic":"https://img.alicdn.com/imgextra/i1/3021408719/TB2JPIdcHVkpuFjSspcXXbSMVXa_!!3021408719.jpg"
      },{
        "more_pic":"https://img.alicdn.com/imgextra/i1/3021408719/TB2buKWdtBopuFjSZPcXXc9EpXa_!!3021408719.jpg"
      },{
        "more_pic":"https://img.alicdn.com/imgextra/i1/3021408719/TB2pH2idrBmpuFjSZFuXXaG_XXa_!!3021408719.jpg"
      }
    ],
  },
   actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  reduce: function(){
    var num = this.data.count;
    if(num > 1){num--;}
    this.setData({
      count: num
    })
  },
  increase: function(){
    var num = this.data.count;
    num++;
    this.setData({
      count: num
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // var  id=options.id;
    
    // let list=this.data.listgood;
    // var that=this;
    // list.forEach(function(arr){
      
    //   if(id==arr.id){
    //     that.setData({
    //       detailgood:arr
    //     })
    //   }
    // })
    // console.log(this.data.detailgood)
  },
  cart: function(){
    wx.navigateTo({
      url: '../car/car'
    })
  },
  addcart: function(){
    this.setData({
      choice: "cart",
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  buy: function(){
    this.setData({
      choice: "buy",
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  chooseStyle: function(e){
    this.setData({
      currentStyleIndex: e.target.dataset.index 
    })
    console.log(e.target.dataset.index )
  },
  chooseColor: function(e){
    this.setData({
      currentColorIndex: e.target.dataset.index 
    })
    console.log(e.target.dataset.index )
  },
  ensure: function(){
    var _this = this;
    console.log(this.data.choice)
    wx.showToast({
      title: '添加购物车成功',
      icon: 'success',
      duration: 2000,
      success: function(){
        _this.actionSheetTap()
      }
    })
  },
  next: function(){
    console.log(this.data.choice)
    wx.navigateTo({
      url: '../purchase/purchase'
      })
  },
  onReady:function(){
 
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})
