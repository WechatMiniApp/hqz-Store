var app = getApp()
Page({
  data:{
    current: 0,
    listgoods:[{
    "id":'0101001',
    "name": "kkkkkZespri佳沛新西兰阳光金奇异果6个92-114g/个(北京)",
    "price": "111.0",
    "type": "3.3kg/箱",
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0101002',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0101003',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0102001',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0102002',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0102003',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0103001',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0103002',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0103003',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0201001',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0201002',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'0202001',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'1203001',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'1401001',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}, {
    "id":'1101001',
    "pic_url": "https://img.alicdn.com/imgextra/i3/3021408719/TB2rMVPdypnpuFjSZFkXXc4ZpXa_!!3021408719.jpg"
}],  
  swiper:{
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000
      }
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    //ajax请求数据
    // wx.request({
    //         url: 'http://www.htmlk.cn/json-test/lists.json',
    //         header: {
    //             'Content-Type': 'application/json'
    //         },
    //         success: function(res) {
    //            switch1(res.data);
    //            console.log(res.data);
    //            that.setData({
    //                listgoods:res.data
    //            });
    //         }
    //     })
    //对商品进行价格排序
    console.log(this.data.listgoods);
    switch1(this.data.listgoods);
    function switch1(odata){
        for(var i=0;i<odata.length-1;i++){
                 //console.log(odata[i].price);
                for(var j=0;j<odata.length-i-1;j++){
                       // console.log(parseInt(odata[j].price)+"-----"+parseInt(odata[j+1].price));
                  if(parseInt(odata[j].price)>parseInt(odata[j+1].price)){
                    var temp=odata[j];
                        odata[j]=odata[j+1];
                        odata[j+1]=temp;
                  }
                }
        }
    }    
  },
  //详情页跳转
  lookdetail:function(e){
    var lookid=e.currentTarget.dataset;
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url:"/pages/detail/detail?id="+lookid.id
    })
  },
  switchSlider:function(e){
    this.setData({
      current:e.target.dataset.index
    })
  },
  changeSlider:function(e){
    this.setData({
      current: e.detail.current
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
