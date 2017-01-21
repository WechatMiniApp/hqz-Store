//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    "inEditMode": false,
    "selected": [],
    "quantity": [],
    "totalPrice": 0,
    type:'block',
    edit:'block1',
    newFrinedAmount: 1,
    inputVal: '',
    tempFriendList: [],
    touchX: 0,
    touchY: 0,
    tempName: '',
    AnimatingName: '',
    deleteAnimation: '',
    price:0,
    num:0,
    total:'0.00',
    Gopay:false,
    selectedAllStatus: false,
    minusStatuses: ['disabled', 'disabled', 'normal', 'normal', 'disabled'],
     list:[{id:'1',shopName:'一恋倾星',status:'等待买家付款',uqired:'1',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊饰品项链欧美热销aaaaa....',price:'59.90',labels:'紫色含项链',num:'2',count:'119.80',select:false},
        {id:'2',shopName:'一恋倾星',status:'等待买家付款',uqired:'1',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊饰品项链欧美热销aaaaa....',price:'59.90',labels:'紫色含项链',num:'2',count:'119.80',select:false},
        {id:'3',shopName:'一恋倾星',status:'等待买家付款',uqired:'1',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊饰品项链欧美热销aaaaa....',price:'59.90',labels:'紫色含项链',num:'2',count:'119.80',select:false},
       {id:'4',shopName:'一恋倾星',status:'等待买家付款',uqired:'1',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊饰品项链欧美热销aaaaa....',price:'59.90',labels:'紫色含项链',num:'2',count:'119.80',select:false},
       {id:'5',shopName:'一恋倾星',status:'等待买家付款',uqired:'1',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊饰品项链欧美热销aaaaa....',price:'59.90',labels:'紫色含项链',num:'2',count:'119.80',select:false},]

  },

onShow:function (team1) {
  this.animation = wx.createAnimation({
    duration: 300,
    timingFunction: 'ease',
  })
},

/***编辑按钮***/
    edit: function() {
        var type=this.data.type==='none'?'block':'none';
        var edit = this.data.edit==='none1'?'block1':'none1';
        this.setData({
          edit:edit,
          type:type
        })
        if (this.data.inEditMode) {
            this.setData({
                "inEditMode": false,
            });
        } else {
            this.setData({
                "inEditMode": true
            });
        }
    },
    /***增加***/
    bindPlus: function(e) {
      var id = parseInt(e.currentTarget.dataset.index);
      var num = this.data.list[id].num; 
      num ++;
      var list = this.data.list;
      list[id].num = num;
      this.setData({
      list: list
      });
      this.sum()
    }, 
    /***减少***/
    bindMinus: function(e) {
      var id = parseInt(e.currentTarget.dataset.index);
      var num = this.data.list[id].num;
      if (num > 1) {
        num --;
      }
      var list = this.data.list;
      list[id].num = num;
      this.setData({
        list: list
      });
      this.sum()
    },
   /***全选***/
    bindSelectAll: function() {
      var selectedAllStatus = this.data.selectedAllStatus;
      selectedAllStatus = !selectedAllStatus;
      console.log(selectedAllStatus)
      var list = this.data.list;
      for (var i = 0; i < list.length; i++) {
        list[i].select = selectedAllStatus;
        var num = parseInt(this.data.list[i].num); 
        var price=parseInt(this.data.list[i].price); 
        }
         this.setData({
           selectedAllStatus: selectedAllStatus,
            count:this.data.count-num*price,
            number:this.data.number-num,
            list: list
          });
          this.sum();
          this.Gopay();
    },
    /***单选***/
    bindCheckbox: function(e) {
      var id = parseInt(e.currentTarget.dataset.index);
      var select = this.data.list[id].select;
      var list = this.data.list;
      var num = parseInt(this.data.list[id].num); 
      var price=this.data.list[id].price; 
      if(!select){
        this.setData({
          count:this.data.count+ num*price,
          number:num+this.data.number
        });
      }else{
        this.setData({
          count:this.data.count- num*price,
          number:this.data.number-num
        });
      }
      list[id].select = !select;
      this.setData({
        list: list
      });
      this.sum();
      this.Gopay();
    },
    placeOrder: function(e) {
        wx.navigateTo({
            url: "../payment/payment?selected=" + this.data.selected + "&total=" + this.data.totalPrice
        });
    },
    sum: function() {
        var list = this.data.list;
        // 计算总金额
        var total = 0;
        for (var i = 0; i < list.length; i++) {
            if (list[i].select) {
               total +=  list[i].num * list[i].price;
            }
        }
        total = total.toFixed(2);
        // 写回经点击修改后的数组
        this.setData({
            total: total
        });
    },
    Gopay: function(){
      var total = this.data.total;
      if(total == 0){
        this.setData({
             Gopay: false
        });
      }else{
        this.setData({
             Gopay: true
        });
      }
    
    },

// // 触摸开始事件
// moveStart: function (e) {
//   this.data.touchX = e.changedTouches[0].clientX;
//   this.data.touchY = e.changedTouches[0].clientY;
// },

// // 触摸结束事件 
// // 动画的执行逻辑
// moveEnd : function (e) {
//   var X = e.changedTouches[0].clientX;
//   var Y = e.changedTouches[0].clientY;
//   var name = e.currentTarget.dataset.name;
//   console.log(name)
//   var data = null, tempAniamtion = null;
//   // console.log('左滑动');
//   if (this.data.touchX - X > 3 && Math.abs(this.data.touchY - Y) < 20) {
//     if (this.data.AnimatingName) {
//       tempAniamtion = this.animation.left('0rpx').step();
//       console.log(tempAniamtion.export()+"0000");
//       this.data.AnimatingName = '';
//       this.setData({
//         AnimatingName: '',
//         deleteAnimation: tempAniamtion.export()
//       })
//     } else {
//       tempAniamtion = this.animation.left('-160rpx').step();
//       console.log(tempAniamtion+"1111");
//       this.setData({
//         AnimatingName: name,
//         deleteAnimation: tempAniamtion.export(),
//         tempName: name
//       })
//     }
//   } else if (this.data.touchX - X < -3 && Math.abs(this.data.touchY - Y) < 20) {
//     // console.log('右滑动');
//     tempAniamtion = this.animation.left('0rpx').step();
//     this.setData({
//       deleteAnimation: tempAniamtion.export(),
//       AnimatingName: ''
//     });
//   }
// },
  //点击删除按钮事件
  delItem:function(e){
    //获取列表中要删除项的下标
    var index = e.target.dataset.index;
    var list = this.data.list;
    console.log(index+"index")
    //移除列表中下标为index的项
    list.splice(index,1);
    //更新列表的状态
    this.setData({
      list:list
    });
  },


  onLoad: function () {
    console.log('onLoad');
    var that = this
    // console.log(wx)
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
    setTimeout(function () {
        wx.switchTab({
          url: '../watchInfo/watchInfo'
        })
    },100)
  }
})
