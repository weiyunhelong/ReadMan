// pages/testresult1/testresult1.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_pay_content:true, //  是否现实支付内容
    show_pay_opera: false, //  是否现实支付按钮
    show_pay_box: true, //  是否现实分析content
    payimg:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      payimg: globalimgurl +"testclass/pay_opera.png",
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

  },

  // 显示支付金额
  showPay(e) {
    this.setData({
      show_pay_content:false,
      show_pay_opera:true
    })
  },
  // 支付
  goto_pay(e){
    this.setData({
      show_pay_box: false
    })
  },
  closePay(e){
    this.setData({
      show_pay_box:false
    })
  },

  // 跳转分享页面
  gotoShare(e){
    wx.navigateTo({
      url: '/pages/testshare/testshare'
    })
  }
})