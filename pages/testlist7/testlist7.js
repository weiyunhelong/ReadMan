// pages/testlist7/testlist7.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "",
    selected_index_1: 0,
    selected_index_2: 0,
    options_list_1: [{
        index: 'A',
        value: 0,
        label: '最符合'
      },
      {
        index: 'B',
        value: 1,
        label: '比较符合'
      },
      {
        index: 'C',
        value: 2,
        label: '一般符合'
      },
      {
        index: 'D',
        value: 3,
        label: '不符合'
      }
    ],
    options_list_2: [{
          index: 'A',
          value: 0,
          label: '最符合'
        },
        {
          index: 'B',
          value: 1,
          label: '比较符合'
        },
        {
          index: 'C',
          value: 2,
          label: '一般符合'
        },
        {
          index: 'D',
          value: 3,
          label: '不符合'
        }
    ],
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
  radioChange1(e) {
    console.log(e)
    this.setData({
      selected_index_1: e.detail.value
    })
  },
  radioChange2(e) {
    console.log(e)
    this.setData({
      selected_index_2: e.detail.value
    })
  },

  goto_result(e){
    wx.navigateTo({
      url: '/pages/testresult7/testresult7'
    })
  }
})