// pages/wuliu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wuliu: {
      sendtype: "顺丰快递",
      paytype: "在线支付",
      sendno: "363534673643423434",
      record: [
        {
          id: 1,
          address: "【广州市】您的快递已签收",
          time: " 2016-03-23 08:45:23"
        },
        {
          id: 2,
          address: "【广州市】快递已到达石井二站",
          time: " 2016-03-23 08:45:21"
        },
        {
          id: 3,
          address: "【广州市】您的快递已签收",
          time: " 2016-03-23 08:45:20"
        }
      ]
    }//物流信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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