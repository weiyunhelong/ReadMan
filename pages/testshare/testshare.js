// pages/testshare/testshare.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:"",
    avatar:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      banner: globalimgurl + "banner_slices/banner_trim.png",
      avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248217567&di=eb450f05b118bdf89deb06d095d4f6c1&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F001t9U6Czy6LCmMeEz3ed%26690",
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

  }
})