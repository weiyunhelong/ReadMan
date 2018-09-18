// pages/feedback/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winh: 0, //高度
    feedback: "", //内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winh: res.screenHeight * 0.6
        })
      },
    })
  },
  //获取反馈的内容
  getfeedback: function(e) {
    var that = this;

    that.setData({
      feedback: e.detail.value
    })
  },
  //提交按钮
  saveopt: function() {
    var that = this;

    if (that.data.feedback == "") {
      wx.showToast({
        title: '请输入意见反馈',
        icon: "none",
        duration: 2000,
        mask: true
      })
    } else {
      wx.showToast({
        title: '提交成功',
        duration: 2000,
        mask: true
      })
      setTimeout(function(){
        wx.navigateBack({
          delta:1
        })
      },2000)
    }
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