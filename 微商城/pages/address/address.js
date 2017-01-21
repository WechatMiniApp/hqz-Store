// pages/yiguo/address/address.js
Page({
  data: {
    array:["省份","美国","中国","巴西","日本"],
    index:0,
    name: "",
    phone: "",
    address: ""
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
    bindNameInput: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  bindPhoneInput: function(e){
    this.setData({
      phone: e.detail.value
    })
  },
  bindAddressInput: function(e){
    this.setData({
      address: e.detail.value
    })
  },
  save:function(){
      var add = {};
      add.name = this.data.name;
      add.phone = this.data.phone;
      add.address = this.data.address;
      wx.setStorageSync('addresslist', add);
      wx.navigateBack()
      
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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