// pages/testgraduate/testgraduate.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "",
    options:[
      {
        id:1,
        optionval:'A',
        optiontxt: '当然是运动', 
      },
      {
        id: 2,
        optionval: 'B',
        optiontxt: '和朋友一起玩',
      },
      {
        id: 3,
        optionval: 'C',
        optiontxt: '呆在电视机和电脑前',
      },
    ],
    chkoption:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      topimg: globalimgurl + "testing/testlist1_img.png"
    })
  },
   //选项的勾选
  radioChange:function(e){
    this.setData({
      chkoption:e.detail.value
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

  gotoNextSubject(e){
    wx.navigateTo({
      url: '/pages/testgraduatetext/testgraduatetext'
    })
  }
})