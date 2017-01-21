// pages/yiguo/address/delete.js
Page({
  data: {
    array:["省份","美国","中国","巴西","日本"],
    index:0,
    list:[{

    }],
    name: "",
    phone: "",
    address: ""
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
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  save: function(){
    var add = {};
    add.name = this.data.name;
    add.phone = this.data.phone;
    add.address = this.data.address;
    wx.setStorageSync('edit', add);
    wx.navigateBack()
    
  },
  delete: function(){
    wx.showModal({
      title: '确定要删除这个商品吗',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var _this = this;
    var index = options.index;
    console.log(index)
    wx.getStorage({
        key: 'edit',
        success: function(res) {
           var list = res.data;
           _this.setData({
                name: list.name,
                address: list.address,
                phone: list.phone
            })
            wx.removeStorageSync('edit')
            
        }
        
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