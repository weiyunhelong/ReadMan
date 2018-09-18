// pages/zhengshu/index.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backimgurl:"",
    sumbox: 25,
    openbox: 4
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //获取参数个数
    that.initData();
    that.setData({
      backimgurl: globalimgurl +"zhengshuqiang/zhengshu@2x.png"
    })
  },
  //获取参数个数
  initData: function() {
    var that = this;

    var boxdata = [{
        id: 1,
        name: "A",
        isopen: true
      },
      {
        id: 2,
        name: "B",
        isopen: false
      },
      {
        id: 3,
        name: "C",
        isopen: false
      },
      {
        id: 4,
        name: "D",
        isopen: true
      },
      {
        id: 5,
        name: "E",
        isopen: true
      },
      {
        id: 6,
        name: "F",
        isopen: true
      },
      {
        id: 7,
        name: "G",
        isopen: true
      },
      {
        id: 8,
        name: "H",
        isopen: true
      },
      {
        id: 9,
        name: "I",
        isopen: true
      },
      {
        id: 10,
        name: "J",
        isopen: true
      },
      {
        id: 11,
        name: "K",
        isopen: false
      },
      {
        id: 12,
        name: "L",
        isopen: true
      },
      {
        id: 13,
        name: "M",
        isopen: false
      },
      {
        id: 14,
        name: "N",
        isopen: false
      },
      {
        id: 15,
        name: "O",
        isopen: false
      },
      {
        id: 16,
        name: "P",
        isopen: false
      },
      {
        id: 17,
        name: "Q",
        isopen: false
      },
      {
        id: 18,
        name: "R",
        isopen: false
      },
      {
        id: 19,
        name: "S",
        isopen: false
      },
      {
        id: 20,
        name: "T",
        isopen: true
      },
      {
        id: 21,
        name: "U",
        isopen: true
      },
      {
        id: 22,
        name: "V",
        isopen: true
      },
      {
        id: 23,
        name: "W",
        isopen: true
      },
      {
        id: 24,
        name: "X",
        isopen: false
      },
      {
        id: 25,
        name: "Y",
        isopen: false
      },
    ];

    that.setData({
      boxdata: boxdata
    })
  },
  //跳转到详情
  godetail: function(e) {
    wx.navigateTo({
      url: '../zhengshu/detail',
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