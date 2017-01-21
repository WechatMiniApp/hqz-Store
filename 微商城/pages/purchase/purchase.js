// pages/yiguo/purchase/purchase.js
Page({
  data:{
    hidden: false,
    list:{}, //数据库地址列表select为true
    name: "",
    address: "",
    phone: ""
  },
  switch1Change: function (e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  selectaddress: function(){
      wx.navigateTo({ url: '../address/select?name='+this.data.name });
  },
  addaddress: function(){
      wx.navigateTo({ url: '../address/address' })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var _this = this;
    wx.getStorage({
        key: 'address',
        success: function(res) {
           var list = res.data;
           _this.setData({
                name: list.name,
                address: list.address,
                phone: list.phone,
                hidden: false
            })
        },
        fail: function() {
            _this.setData({
                hidden: true
            })
        }
      })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})