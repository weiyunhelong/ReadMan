//index.js
//获取应用实例
const app = getApp()
var globalimgurl = getApp().globalData.globalimgurl;

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    dots_color:"#00ADEF", //  轮播图下标当前选中的指示点颜色
    show_qiandao:false, // 是否显示签到弹窗
    show_qiandao_cotent: true, // 是否现实签到按钮content
    show_qiaodao_jifen: false, //  是否现实签到积分弹窗
    show_service: false, //  是否现实客户服务
    /**图片部分**/
    bannerimglist: [globalimgurl + "index/banner.png", globalimgurl + "index/banner.png",globalimgurl + "index/banner.png"],//顶部的轮播图
    trendlist:[
      {
        id:1,
        imgpath: globalimgurl + "index/aa.jpg",
        title:"活动标题，最多显示两行，溢出隐藏（结尾用省略号）啊…哈哈哈…",
        leasttime:"2小时",
        viewnum: 2362888
      },
      {
        id: 2,
        imgpath: globalimgurl + "index/aa.jpg",
        title: "活动标题，最多显示两行，溢出隐藏（结尾用省略号）啊…哈哈哈…",
        leasttime: "2小时",
        viewnum: 2362888
      },
      {
        id: 3,
        imgpath: globalimgurl + "index/aa.jpg",
        title: "活动标题，最多显示两行，溢出隐藏（结尾用省略号）啊…哈哈哈…",
        leasttime: "2小时",
        viewnum: 2362888
      },
    ],//最新动态
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    //图片资源
    this.setData({
      tabicon1: globalimgurl + "index/class_1.png",
      tabicon2: globalimgurl + "index/class_2.png",
      tabicon3: globalimgurl + "index/class_3.png",
      dongtaiimg: globalimgurl + "index/aa.jpg",
      eyeimg: globalimgurl + "index/eye.png",
      flagaimg: globalimgurl + "index/flag_active.png",
      flaghimg: globalimgurl + "index/flag_gray.png",
      closeimg: globalimgurl + "index/close.png",
      tigerimg: globalimgurl + "index/tiger.png",
      serviceimg: globalimgurl + "index/service_img.png",
      qiandaobg: globalimgurl + "index/qiandao_bg.png",
      kefuimg: globalimgurl + "index/kefu.png",
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  // 自定义时间

  // 关闭签到弹窗
  closeQiandao(e){
    this.setData({
      show_qiandao:false
    })
  },
  // 跳转到动态详情
  goto_dynamicdetail(e){
    wx.navigateTo({
      url: '/pages/dynamicdetail/dynamicdetail'
    })
  },

  // 致电客服
  call_service(e){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: "020-928272",
      complete:function(e){
        console.log(e)
        that.setData({
          show_service:false
        })
      }
    })
  },
  // 现实客户服务
  showService(e){
    this.setData({
      show_service:true
    })
  },

  // 跳转课程测试
  goto_classtest(e){
    wx.navigateTo({
      url: '/pages/classtest/classtest'
    })
  },
  //  跳转课程介绍
  goto_classintroduce(e){
    wx.navigateTo({
      url: '/pages/classintroduce/classintroduce'
    })
  },
  //跳转结业考试
  goto_graduatetest(e){
    wx.navigateTo({
      url: '/pages/graduatetest/graduatetest'
    })
  }
})
