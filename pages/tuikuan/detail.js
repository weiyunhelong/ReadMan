// pages/tuikuan/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //退款订单id
    status: 1, //状态
    ritem: {
      orderid: 2,
      orderno: '232445',
      orderstatustxt: "退款失败",
      goods: [{
        id: 1,
        imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
        name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
        attr: "颜色:粉红色",
        jifen: 10,
        buynum: 1
      }],
      buygoodsnum: 1,
      sumprice: 10,
      orderstatus: 2
    }, //订单信息
    refundobj: {
      kind: 0, //0->退货，1->退款
      numberval: 2, //退款个数
      reason: "不喜欢", //退款原因
      imglist: [
        "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",      
        "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg", 
        "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg", 
        "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg", 
        "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg"], //图片列表
    },//退款原因部分
    addressobj:{
      username:"王嘉尔",
      phone:"12563553322",
      address:"广东省广州市天河区华南公园"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      id: options.id, //退款订单id
      status: options.status, //状态
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

  }
})