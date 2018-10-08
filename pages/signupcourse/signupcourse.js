// pages/signupcourse/signupcourse.js
var requesturl = getApp().globalData.requesturl; //请求接口的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classlist:[
      {
        id:1,
        name:"《学会战胜压力》"
      },
      {
        id: 2,
        name: "《快速提高口头表达能力》"
      },
      {
        id: 3,
        name: "《学会战胜压力》"
      },
    ],//课程列表
  },
  //预约课程
  gobookopt:function(e){
    wx.setStorage({
      key: 'bookclassobj',
      data: e.currentTarget.dataset.id,
    })
    wx.navigateBack({
      delta:1
    })
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
    var that=this;
    //初始化数据
    that.initData(); 
  },
  //初始化数据
  initData:function(){
    var that=this;
    //请求接口获取数据
    wx.getStorage({
      key: 'bookclasslist',
      success: function(res) {
        console.log("报名的课程列表:");
        console.log(res);
        
        that.setData({
          classlist:res.data
        })
      },
    })
    //结束
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