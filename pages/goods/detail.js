// pages/goods/detail.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //商品id
    goodscover: "", //商品封面
    goodsbrief: "", //商品简介
    notelist: [], //标签列表
    goodsjifen: 0, //积分数
    salenum: 0, //销售个数
    goodsintro: "", //富文本
    cartnum: 2, //购物车个数    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //接受参数
    that.setData({
      id: options.id, //商品id
    })
    //获取商品的详情
    that.getGoodsInfo();
  },
  //获取商品的详情
  getGoodsInfo: function() {
    var that = this;
    //参数部分
    var id = that.data.id;

    //请求接口获取参数
    that.setData({
      goodscover: globalimgurl+"mall/goodstop.png", //商品封面
      goodsbrief: "开发宝宝的脑力,并不像你想象的那么复杂,你得记住关键的两点: 大脑神经发育的法则:“不用它,就失去它.” 没有受", //商品简介
      notelist: ["便签一", "便签二", "便签三"], //标签列表
      goodsjifen: 10, //积分数
      salenum: 78987, //销售个数
      goodsintro: "<div style='font-size:15px;color#333;'>图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插</div><div style='text-align:center;'><img src='http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg' style='width:351px;height:132px;'/></div>", //富文本
    })
  },
  //点击购物车
  gocart: function() {
    wx.navigateTo({
      url: '../shopcart/index',
    })
  },
  //加入到购物车
  addcartopt: function() {
    var that = this;
    //参数部分
    var id = that.data.id;

    that.setData({
      cartnum: that.data.cartnum + 1
    })
    wx.showToast({
      title: '加入购物车成功',
      duration: 2000,
      mask: true,
      icon: "none"
    })
  },
  //立即购物
  buyopt: function() {
    var that = this;
    //参数部分
    var id = that.data.id;

    wx.showToast({
      title: '购物成功',
      duration: 2000,
      mask: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})