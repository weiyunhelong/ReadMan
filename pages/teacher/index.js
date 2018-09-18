// pages/teacher/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    teachernum:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //得到姓名
  getname:function(e){
    var that=this;

    that.setData({
      username:e.detail.value
    })
  },
  //得到证书号
  getnum: function (e) {
    var that = this;

    that.setData({
      teachernum: e.detail.value
    })
  },
  //点击查询
  searchopt:function(){
    var that=this;
    
    var username = that.data.username,
      teachernum = that.data.teachernum;

    if (username == "" && teachernum==""){
      wx.showToast({
        title: '请至少输入一项',
        duration:2000,
        icon:'none',
        mask:true
      })
    }  else{
      wx.navigateTo({
        url: '../teacher/result?name=' + username + "&numval=" + teachernum,
      })
    }
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