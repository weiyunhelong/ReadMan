// pages/mall/index.js
var globalimgurl = getApp().globalData.globalimgurl;//图片地址
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jifen:323,//积分的值
    tablist:[],//菜单的值
    chktabid:0,//选中的菜单的值
    goodslist:[],//商品列表
    chkgoods:"",//选中的商品  
    chkgoodsnum:2,//选中商品的个数  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  //初始化菜单
  initMenu: function () {
    var that=this;

    var tablist=[
      {
        id:0,
        icon:"/resources/mall/kind1.png",
        title:"全部"
      },
      {
        id: 1,
        icon: "/resources/mall/kind2.png",
        title: "分类一"
      },
      {
        id: 2,
        icon: "/resources/mall/kind1.png",
        title: "分类二"
      }, 
      {
        id: 3,
        icon: "/resources/mall/kind2.png",
        title: "分类三"
      },
      {
        id: 4,
        icon: "/resources/mall/kind1.png",
        title: "分类四"
      },
    ];

    that.setData({
      tablist: tablist
    })
  },
  //初始化商品数据
  initGoods: function () {
    var that=this;
    //参数部分
    var chktabid = that.data.chktabid;//选中的菜单的值

    var goodslist=[
      {
        id:1,
        imgpath: globalimgurl+"mall/goods.png",
        name:"多功能文具盒+精美双 肩背书包",
        jifen:10
      },
      {
        id: 2,
        imgpath: globalimgurl + "mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
      {
        id: 3,
        imgpath: globalimgurl + "mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
      {
        id: 4,
        imgpath: globalimgurl + "mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
    ];
    that.setData({
      goodslist: goodslist
    })
  },
  //充值
  gorecharge:function(){
    wx.navigateTo({
      url: '../recharge/index',
    })
  },
  //获取搜索的值
  gosearch: function (e) {
    wx.navigateTo({
      url: '../mall/search',
    })
  },
  //菜单的点击
  chkmenu:function(e){
    var that=this;
    that.setData({
      chktabid:e.currentTarget.dataset.id
    })
    that.initGoods();
  },
  //查看更多
  gomoreopt:function(){
    wx.navigateTo({
      url: '../goods/index'
    })
  },
  //跳转到详情页面
  gogoods:function(e){
    var that=this;
    //跳转到详情页面
    wx.navigateTo({
      url: '../goods/detail?id=' + e.currentTarget.dataset.id,
    })
  },
  //点击到购物车页面
  gocartopt:function(){
    wx.navigateTo({
      url: '../shopcart/index',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    //获取用户积分
    that.initJifen();
    //初始化菜单
    that.initMenu();
    //初始化商品数据
    that.initGoods();
    //初始化购物车数据
    that.initShopcarts();
  },
  //获取用户积分
  initJifen:function(){
    var that=this;
    //获取用户的积分
    wx.request({
      url: requesturl +'getMyPoints',
      data: '',
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取用户的积分:");
        console.log(res);
        if(res.data.code==0){
          that.setData({
            jifen: res.data.resultObject
          })
        }else{
          console.log("积分失败的原因:"+res.data.message);
        }
      }
    })
  },
  //初始化购物车数据
  initShopcarts:function(){
    var that = this;
    //获取用户的积分
    wx.request({
      url: requesturl + 'getMyCartCount',
      data: '',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function (res) {
        console.log("获取购物车的数量:");
        console.log(res);
        if (res.data.code == 0) {
          that.setData({
            chkgoodsnum: res.data.resultObject
          })
        } else {
          console.log("购物车失败的原因:" + res.data.message);
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})