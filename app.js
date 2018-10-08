//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,//微信用户的信息
    requesturl:"https://dsr.majiangyun.cn/guns/gunsApi/",//请求接口的地址
    globalimgurl:"https://dsr.majiangyun.cn/appimages/",//图片资源的地址
    isnewuser:false,//是否是新用户
    isnewhome:false,//第一次进入首页
    Token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMyIsImV4cCI6MTUzOTQ5NzE1NSwiaWF0IjoxNTM4ODkyMzU1fQ.bYxvYjSUBVbCNRWM4TmjhDT5fWlS-kyhrCOXIHSonM-Texh4_3YLFeFyDfpJ9AkBs7Jys49Pl2Dj4lY1i0p1Fw",//TOKEN值
  }
})