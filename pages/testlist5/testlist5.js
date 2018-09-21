// pages/testlist5/testlist5.js
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
        label: '我都能为自己的想法找出充分的论据，并且无论其他人之前如何举棋不定或者有其他意见，我最后都能把他们说服。'
      },
      {
        index: 'B',
        value: 1,
        label: '我通常会参与讨论，但往往缺乏足够的论据，所以最终我的想法并没有引起关注。'
      },
      {
        index: 'C',
        value: 2,
        label: '我往往置身事外。'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      topimg: globalimgurl + "testing/testlist1_img.png"
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

  // 选择答案
  radioChange(e) {
    this.setData({
      selected_index: e.detail.value
    })
  },

  goto_result(e){
    wx.navigateTo({
      url: '/pages/testresult5/testresult5'
    })
  }
})