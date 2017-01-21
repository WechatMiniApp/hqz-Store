//index.js  
//获取应用实例  
var id=""
var app = getApp()  
Page( {  
  data: {  
      allShop:[
 {shopName:'一恋倾星',status:'等待买家付款',uqired:'1',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊饰品项链欧美热销aaaaa....',price:'59.90',labels:'紫色含项链',num:'2',count:'119.80'},
{shopName:'一恋倾星',status:'等待商家发货',uqired:'2',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'},
{shopName:'一恋倾星',status:'等待买家收货',uqired:'3',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'},
{shopName:'一恋倾星',status:'等待商家发货',uqired:'2',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'},
{shopName:'一恋倾星',status:'等待买家收货',uqired:'3',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'},
{shopName:'一恋倾星',status:'已完成',uqired:'4',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'},
{shopName:'一恋倾星',status:'已完成',uqired:'4',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'},
{shopName:'一恋倾星',status:'已完成',uqired:'4',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'},
{shopName:'一恋倾星',status:'等待买家付款',uqired:'4',pic:'https://img.alicdn.com/imgextra/i1/3021408719/TB2U67scMxlpuFjy0FoXXa.lXXa_!!3021408719.jpg',orderNum:'2222222222222',product:'【一恋倾星】啊啊啊',price:'500000009.90',labels:'紫色含项链',num:'1',count:'500000009.90'}
      ],
      
    /***页面配置*/  
    winWidth: 0,  
    winHeight: 0,  
   
    currentTab: 0,  
  },  
  cancel: function(){
    console.log(111)

  },
  onLoad: function(option) {
    id=option.id;
    this.setData({
      currentTab:id
    })  
    console.log(option.id)
    var that = this;  
    /***获取系统信息*/  
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
    }) 
  },
  /***滑动切换tab*/  
  bindChange: function( e ) {  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
    console.log(e.detail.current )
  },  
  /***点击tab切换*/  
  swichNav: function( e ) {  
    var that = this;  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
    console.log(e.target.dataset.current )
  }  
})  