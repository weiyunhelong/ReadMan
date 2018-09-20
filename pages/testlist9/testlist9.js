// pages/testlist9/testlist9.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "",
    selected_index: 0,
    options_list: [{
        index: 'A',
        value: 0,
        label: '我的口试成绩一直比笔试成绩差。'
      },
      {
        index: 'B',
        value: 1,
        label: '我一直紧跟教学的进度，但我很少发言。我把机会都让给别人'
      },
      {
        index: 'C',
        value: 2,
        label: '我不认为大家期待听到我的想法。课堂上没有我参与说不定会进行得更好。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      topimg: globalimgurl + "testing/testlist1_img.png"
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

  },

  // 选择答案
  radioChange(e) {
    this.setData({
      selected_index: e.detail.value
    })
  },

  goto_result(e) {
    wx.navigateTo({
      url: '/pages/testresult9/testresult9'
    })
  }
})