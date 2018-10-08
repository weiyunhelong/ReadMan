// pages/graduatesuccess/graduatesuccess.js
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testid:0,//测试id
    score: 0,//得分
    testlist:[],//题目列表
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
    //获取考试的内容
    that.InitData();
  },
  //获取考试的内容
  InitData:function(){
    var that=this;
    //请求列表，获取数据
    wx.request({
      url: requesturl + 'getTestResult',
      data: {
        testid: that.data.testid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取考试的数据:");
        console.log(res);
        if(res.data.code==0){
          that.setData({
            score: res.data.resultObject.score,
            testlist: res.data.resultObject.answerList
          })
        }else{
          console.log("获取考试的数据失败!"+res.data.message);
        }
      }
    })
  },
  //跳转到证书
  gozhengshu:function(){
    wx.navigateTo({
      url: '../zhengshu/detail',
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

  }
})