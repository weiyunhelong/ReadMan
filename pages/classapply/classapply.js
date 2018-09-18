// pages/classapply/classapply.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "",
    kefuimg:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      topimg: globalimgurl + "testing/classapply_img.png",
      kefuimg: globalimgurl + "index/service_img.png",
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

  // 显示客服报名
  goto_apply(e){
    this.setData({
      show_service:true
    })
  },

  // 致电客服
  call_service(e) {
    var that = this;
    /*
    wx.makePhoneCall({
      phoneNumber: "020-928272",
      complete: function (e) {
        console.log(e)
        that.setData({
          show_service: false
        })
      }
    })
    */
    wx.redirectTo({
      url: '../index/index',
    })
  },
})