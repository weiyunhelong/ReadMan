// pages/register/register.js
var globalimgurl = getApp().globalData.globalimgurl;
var requesturl = getApp().globalData.requesturl;
var timer = ''; //计时器
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header_img: "",
    phone: "", //手机号码
    code: "", //验证码
    msgcode:"",//短信验证码
    pwd: "", //密码
    tips: "获取验证码", //提示文字
    clock: 60, //倒计时
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      header_img: globalimgurl + "login/register_img.png"
    })
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
        url: requesturl +'sendRegisterCode',
        data: {
          phone:that.data.phone
        },
        header: {
          "Content-Type":"application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function(res) {
          console.log("获取验证码的值:");
          console.log(res);

          if(res.data.code==0){
            that.setData({
              msgcode: res.data.resultObject.code
            })
          }else{
            wx.showToast({
              title: res.data.message,
              mask: true,
              duration: 2000,
              icon: "none"
            })
          }
        }
      })
    }
  },
  //获取输入的验证码
  getcode: function(e) {
    var that = this;
    var code = e.detail.value;
    var rightcode = that.data.msgcode;
    if (code == rightcode){
      that.setData({
        code: e.detail.value
      })
    }else{
      wx.showToast({
        title: '验证码错误',
        icon:"none",
        mask:true,
        duration:2000
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
  //注册事件
  signinopt: function() {
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
    }  else if (pwd == "") {
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
      wx.showLoading({
        title: '数据提交中...',
      })
      //提交请求接口
      wx.request({
        url: requesturl +'register',
        data: {
          phone:phone,
          password:pwd
        },
        header: {
          "Content-Type":"application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function(res) {
          console.log("注册的结果:");
          console.log(res);
          wx.hideLoading();
          if(res.data.code==0){
            wx.showToast({
              title: '注册成功',
              mask: true,
              duration: 2000
            })
            getApp().globalData.isnewuser = true;
            setTimeout(function () {
              wx.navigateBack({
                delta:1
              })
              wx.redirectTo({
                url: '../login/login',
              })
            }, 3000)
          }else{
            wx.showToast({
              title: res.data.message,
              mask: true,
              duration: 2000,
              icon:"none"
            })
          }
        }
      })
      //结束标识符     
    }
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