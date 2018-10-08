// pages/login/login.js
var globalimgurl = getApp().globalData.globalimgurl; //图片的地址
var requesturl = getApp().globalData.requesturl; //请求接口的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerimg: "",
    phone: "", //手机号
    pwd: "", //密码
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    that.setData({
      headerimg: globalimgurl + "denglu_chatu/denglu_chatu@2x.png"
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
  //获取手机号
  getphone: function(e) {
    var that = this;
    that.setData({
      phone: e.detail.value
    })
  },
  //获取密码
  getpwd: function(e) {
    var that = this;
    that.setData({
      pwd: e.detail.value
    })
  },
  //登录
  go_login: function(e) {
    var that = this;
    //参数部分
    var phone = that.data.phone;
    var pwd = that.data.pwd;
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
    } else if (pwd == "") {
      wx.showToast({
        title: '请输入密码',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (pwd.length < 6) {
      wx.showToast({
        title: '请输入6-16位密码',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else if (pwd.length > 16) {
      wx.showToast({
        title: '请输入6-16位密码',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else {
      //提交请求
      wx.request({
        url: requesturl + 'auth',
        data: {
          username: phone,
          password: pwd
        },
        header: {
          "Content-Type":"application/x-www-form-urlencoded"
        },
        method: 'POST',
        success: function(res) {
          console.log("登录的结果:");
          console.log(res);

          if(res.data.code==0)
          {
            getApp().globalData.Token = res.data.token;
            //注册用户
            if (getApp().globalData.isnewuser){
              wx.redirectTo({
                url: '../consummateinfo/consummateinfo',
              })
            }else{//老用户
              getApp().globalData.isnewhome=true;//第一次进入首页
              wx.redirectTo({
                url: '../index/index',
              })
            }            
          }else{
            wx.showToast({
              title: res.data.message,
              mask:true,
              duration:2000,
              icon:"none"
            })
          }
        }
      })
      //结束标识符    
    }
  },
  //忘记密码
  goRemindPwd: function(e) {
    wx.navigateTo({
      url: '../remindpwd/remindpwd',
    })
  },
  //注册
  goRegister: function(e) {
    wx.navigateTo({
      url: '../register/register'
    })
  },
})