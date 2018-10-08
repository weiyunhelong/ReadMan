// pages/graduatetest/graduatetest.js
var globalimgurl = getApp().globalData.globalimgurl;//图片地址
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "",
    datalist:[],//结业考试
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      topimg: globalimgurl + "testclass/graduate_pic.png"
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
   var that=this;
   //初始化数据
   that.InitData();
  },
  //初始化数据
  InitData:function(){
    var that=this;
    //请求接口，获取数据
    wx.request({
      url: requesturl +'getMyTestList',
      data: '',
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("结业考试结果:");
        console.log(res);
        if(res.data.code==0){
          that.setData({
            datalist: res.data.resultObject
          })
        }else{
          console.log("接口获取失败!" + res.data.message);
        }
      }
    })
  },
  //开始考试
  goto_graduatetest(e) {
    var that = this;
    //参数部分
    var testid = e.currentTarget.dataset.id;
    //判断是否可以考试
    wx.request({
      url: requesturl+'canTest',
      data: {
        testid:testid
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("是否考试的结果:");
        console.log(res);

        if(res.data.code==0){
          wx.navigateTo({
            url: '../testgraduate/testgraduate?id=' + testid
          })
        }else{
          wx.showModal({
            title: '提示',
            content: res.data.message,
            showCancel:false
          })
        }
      }      
    })
  
  },
  //查看结果
  goto_graduateresult(e) {
    var that=this;    
    //参数部分
    var testid = e.currentTarget.dataset.id;
    var score=e.currentTarget.dataset.score;
    //页面的跳转
    if (parseInt(score) >=80){
      wx.navigateTo({
        url: '../graduatesuccess/graduatesuccess?id=' + testid 
      })
    }else{
      wx.navigateTo({
        url: '../graduatefail/graduatefail?id=' + testid
      })
    }   
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
})