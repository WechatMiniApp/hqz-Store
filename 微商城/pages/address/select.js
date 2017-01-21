// pages/yiguo/address/select.js
Page({
  data:{
    options:"",
    editIndex: 0,
    list: [
      {
        id: 0,
        select: false,
        name: '周秀娜',
        phone: 132544165,
        address: '广东省广州市天河区车陂大塘中接真利来801'
      },
      {
        id: 1,
        select: false,
        name: '吴秀波',
        phone: 132544165,
        address: '广东省广州市天河区车陂大塘中接真利来801'
      }
    ]
  },
   bindCheckbox: function(e) {
      var id = parseInt(e.currentTarget.dataset.index);
      var select = this.data.list[id].select;
      var list = this.data.list;
      for(var i=0;i<list.length;i++){
        list[i].select = false;
      }
      list[id].select = true;
      this.setData({
        list: list
      });
      console.log(id)
      wx.setStorageSync('address', list[id]);
      wx.navigateBack()
    },
  addaddress:function(){
    wx.navigateTo({ url: './address' })
  },
  edit: function(e){
    
    var index = parseInt(e.currentTarget.dataset.index);
    var list = this.data.list;
    this.setData({
      editIndex: index
    });
    wx.setStorageSync('edit', list[index]);
    wx.navigateTo({
      url: './delete?index='+this.data.editIndex,
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
        options: options.name
      });
    var list = this.data.list;
    var name = this.data.options;
     for(var i=0;i<list.length;i++){
       if(list[i].name == name){
         list[i].select = true;
       }
      }
      this.setData({
        list: list
      });
    console.log("load")
  },
  onReady:function(){
    // 页面渲染完成
    console.log("ready")
  },
  onShow:function(){
    // 页面显示
    console.log("show")
    
    var _this = this;
    var list = this.data.list;
    var length = list.length;
    var editIndex = this.data.editIndex;

    wx.getStorage({
        key: 'edit',
        success: function(res) {
           var edit = res.data;
           for(var i=0;i<list.length;i++){
              if(list[i].id == editIndex){
                list[i].name = edit.name;
                list[i].phone = edit.phone;
                list[i].address = edit.address;
              }
            }
          _this.setData({
               list: list
            })
        console.log(_this.data.list)
         wx.removeStorageSync('edit')
        }
      })
    wx.getStorage({
        key: 'addresslist',
        success: function(res) {
          var addlist = res.data;
          addlist.id = length;
          addlist.select = false;
          list.push(addlist)
          _this.setData({
            list: list
          })
          wx.removeStorageSync('addresslist')
        }
      })
      
    
     
      // this.setData({
      //   list: list
      // });
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})