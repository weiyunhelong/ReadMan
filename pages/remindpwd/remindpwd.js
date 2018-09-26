// pages/remindpwd/remindpwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",//手机号码
    code:"",//验证码
    pwd:"",//密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取手机号码
  getphone:function(e){
    var that=this;
    that.setData({
      phone:e.detail.value
    })
  },
  //获取验证码
  getcode: function (e) {
    var that = this;
    that.setData({
      code: e.detail.value
    })
  },
  //获取密码
  getpwd: function (e) {
    var that = this;
    that.setData({
      pwd: e.detail.value
    })
  },
  // 用户自定义事件
  goLogin:function(e) {
    var that = this;
    //参数部分
    var phone = that.data.phone;
    var pwd = that.data.pwd;
    var code = that.data.code;
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;

    if (phone == "") {
      wx.showToast({
        title: '请输入手机号',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (!reg.test(phone)) {
      wx.showToast({
        title: '手机号码错误',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (code=="") {
      wx.showToast({
        title: '请输入验证码',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (code.length != 6) {
      wx.showToast({
        title: '验证码错误',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (pwd == "") {
      wx.showToast({
        title: '请输入密码',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (pwd.lenght < 6) {
      wx.showToast({
        title: '密码长度不足6位',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (pwd.lenght > 16) {
      wx.showToast({
        title: '密码长度小于16位',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else {
      wx.redirectTo({
        url: '../login/login',
      })
    }
  },
  //已有账号，立即登录
  goLoginopt:function(){
    wx.redirectTo({
      url: '../login/login',
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

 


})