// pages/remindpwd/remindpwd.js
var requesturl = getApp().globalData.requesturl;
var timer = ''; //计时器
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: "", //手机号码
    code: "", //验证码
    msgcode: "", //短信验证码
    pwd: "", //密码
    tips: "获取验证码", //提示文字
    clock: 60, //倒计时
    pwd: "", //密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //获取手机号码
  getphone: function(e) {
    var that = this;
    that.setData({
      phone: e.detail.value
    })
  },
  //获取验证码
  getvalidcode: function() {
    var that = this;
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;

    //验证手机号码
    if (that.data.phone == "") {
      wx.showToast({
        title: '请输入手机号码',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (!reg.test(that.data.phone)) {
      wx.showToast({
        title: '手机号码错误',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else {
      //倒计时
      timer = setInterval(function() {
        if (that.data.clock == 0) {
          clearInterval(timer);
          that.setData({
            clock: 60,
            tips: "获取验证码"
          })
        } else {
          that.setData({
            clock: --that.data.clock,
            tips: "倒计时" + (that.data.clock) + "s"
          })
        }
      }, 1000)
      //请求发送短信的接口
      wx.request({
        url: requesturl + 'sendFindPwsCode',
        data: {
          phone: that.data.phone
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function(res) {
          console.log("获取验证码的值:");
          console.log(res);

          if (res.data.code == 0) {
            that.setData({
              msgcode: res.data.resultObject.code
            })
          }
        }
      })
    }
  },
  //获取验证码
  getcode: function(e) {
    var that = this;
    var code = e.detail.value;
    var rightcode = that.data.msgcode;
    if (code == rightcode) {
      that.setData({
        code: e.detail.value
      })
    } else {
      wx.showToast({
        title: '验证码错误',
        icon: "none",
        mask: true,
        duration: 2000
      })
      that.setData({
        code: ''
      })
    }
  },
  //获取密码
  getpwd: function(e) {
    var that = this;
    that.setData({
      pwd: e.detail.value
    })
  },
  // 用户自定义事件
  goLogin: function(e) {
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
    } else if (code == "") {
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

      //请求接口
      wx.request({
        url: requesturl + 'saveNewPwd',
        data: {
          phone: phone,
          newPassword: pwd
        },
        header: {
          "Content-Type":"application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function(res) {
          console.log("找回密码的结果:");
          console.log(res);

          if(res.data.code==0){
            wx.navigateBack({
              delta: 1
            })
          }else{
            wx.showToast({
              title: res.data.message,
              icon:'none',
              duration:2000,
              mask:true
            })
          }
        },
      })
      //结束标识符      
    }
  },
  //已有账号，立即登录
  goLoginopt: function() {
    wx.redirectTo({
      url: '../login/login',
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

  },




})