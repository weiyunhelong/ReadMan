// pages/graduatefail/graduatefail.js
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testid:0,//测试试卷id
    score:0,//分数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //接受参数
    that.setData({
      testid:parseInt(options.id)
    })
    //获取分数
    that.InitData();
  },
  //获取分数
  InitData:function(){
    var that=this;
    //请求接口获取参数
    wx.request({
      url: requesturl +'getTestResult',
      data: {
        testid: that.data.testid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取测试的分数:");
        console.log(res);
        if(res.data.code==0){
          that.setData({
            score:res.data.resultObject.score
          })
        }
      }
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

  // 重新考试
  retry:function(e) {
    wx.navigateTo({
      url: '../graduatetest/graduatetest'
    })
  },

  // 下次再考
  giveup: function(e) {
    wx.redirectTo({
      url: '../index/index'
    })
  },
})