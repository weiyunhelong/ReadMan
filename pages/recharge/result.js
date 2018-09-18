// pages/recharge/result.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgback:"",
    sumjifen:0,//总积分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取总积分
    that.getJifen();
    that.setData({
      imgback: globalimgurl +"chognzhichenggong_chatu/chognzhichenggong_chatu@2x.png"
    })
  },
  //获取总积分
  getJifen:function(){
    var that=this;
    //请求接口，获取用户总积分
    that.setData({
      sumjifen: 6777
    })
  },
  //点击确定按钮
  gomall:function(){
    wx.navigateBack({
      delta:2
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