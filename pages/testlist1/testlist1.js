// pages/testlist1/testlist1.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "",
    selected_index:0,
    options_list:[
      {
        value:0,
        label: '完全符合'
      },
      {
        value: 1,
        label: '比较符合'
      },
      {
        value: 2,
        label: '基本符合'
      },
      {
        value: 3,
        label: '比较不符合'
      },
      {
        value: 4,
        label: '完全不符合'
      },
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
  radioChange(e){
    this.setData({
      selected_index: e.detail.value
    })
  },

  // 跳转到结果
  goto_result(e){
    wx.navigateTo({
      url: '/pages/testresult1/testresult1'
    })
  }
})