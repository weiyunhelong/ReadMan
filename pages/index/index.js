//index.js
//获取应用实例
const app = getApp()
var globalimgurl = getApp().globalData.globalimgurl;
var requesturl = getApp().globalData.requesturl;

Page({
  data: {
    dots_color: "#00ADEF", //  轮播图下标当前选中的指示点颜色
    show_qiandao: false, // 是否显示签到弹窗
    show_qiandao_cotent: false, // 是否显示签到按钮content
    show_qiaodao_jifen: false, //  是否显示签到积分弹窗
    showphonev: false,//  是否显示客户服务
    /**图片部分**/
    bannerimglist: [globalimgurl + "index/banner.png", globalimgurl + "index/banner.png", globalimgurl + "index/banner.png"], //顶部的轮播图
    trendlist: [{
        id: 1,
        imgpath: globalimgurl + "index/aa.jpg",
        title: "活动标题，最多显示两行，溢出隐藏（结尾用省略号）啊…哈哈哈…",
        leasttime: "2小时",
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
    ], //最新动态
    /**一周签到的情况**/
    weekone:false,//周一签到的数据
    weektwo: false,//周二签到的数据
    weekthree: false,//周三签到的数据
    weekfour: false,//周四签到的数据
    weekfive: false,//周五签到的数据
    weeksix: false,//周六签到的数据
    weekseven: false,//周日签到的数据
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
   var that=this;
    //图片资源
    that.setData({
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

    //判断用户的进入方式（登录，注册的）
    if (getApp().globalData.isnewuser){
      that.setData({
        show_qiandao_cotent: false, // 是否显示签到按钮content
        show_qiaodao_jifen: true, //  是否显示签到积分弹窗
      })
    }else{
      that.setData({
        show_qiandao_cotent: getApp().globalData.isnewhome, // 是否显示签到按钮content
        show_qiaodao_jifen: false, //  是否显示签到积分弹窗
      })
      getApp().globalData.isnewhome=false;
    }
    //获取一周签到的数据
    that.initSign();
  },
  //获取一周签到的数据
  initSign:function(){
    var that=this;
    //请求接口，获取一周的签到的数据
    wx.request({
      url: requesturl +'getUserSignupWeek',
      data: {
        Authorization:getApp().globalData.Token
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("一周签到的结果:");
        console.log(res);

        that.setData({
          weekone: res.data.resultObject[0].Issign,//周一签到的数据
          weektwo: res.data.resultObject[1].Issign,//周二签到的数据
          weekthree: res.data.resultObject[2].Issign,//周三签到的数据
          weekfour: res.data.resultObject[3].Issign,//周四签到的数据
          weekfive: res.data.resultObject[4].Issign,//周五签到的数据
          weeksix: res.data.resultObject[5].Issign,//周六签到的数据
          weekseven: res.data.resultObject[6].Issign,//周日签到的数据
        })
      }
    })
  },
  // 自定义事件

  // 关闭签到弹窗
  closeQiandao: function(e) {
    this.setData({
      show_qiandao: false
    })
  },
  closeQiandaoOpt: function() {
    this.setData({
      show_qiandao_cotent: true,
      show_qiaodao_jifen: false
    })
  },
  // 签到获取积分
  getJifen: function(e) {
    var that = this;
    //请求接口，获取数据
    wx.request({
      url: requesturl +'userSignup',
      data: {
        Authorization:getApp().globalData.Token
      },
      header: {
        "Content-Type":  "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("签到结果:");
        console.log(res);

        if(res.data.code==0){
          wx.showToast({
            title: '签到成功',
            mask: true,
            success: function () {
              that.setData({
                show_qiandao_cotent: false,
                show_qiaodao_jifen: false,
                show_qiandao: false
              })
            },
          })
        }else{
          wx.showToast({
            title: '签到失败',
            mask: true,
            icon:"none",
            success: function () {
              that.setData({
                show_qiandao_cotent: false,
                show_qiaodao_jifen: false,
                show_qiandao: false
              })
            },
          })
        }
      }
    })
    //结束标志符号    
  },
  // 跳转到动态详情
  goto_dynamicdetail: function(e) {
    wx.navigateTo({
      url: '/pages/dynamicdetail/dynamicdetail'
    })
  },
  // 显示咨询
  showService: function(e) {
    var that = this;
    that.setData({
      showphonev: true
    })
  },
  //隐藏弹窗
  showChange: function () {
    var that = this;
    that.setData({
      showphonev: false
    })
  },

  // 跳转课程测试
  goto_classtest: function(e) {
    wx.navigateTo({
      url: '/pages/classtest/classtest'
    })
  },
  //  跳转课程介绍
  goto_classintroduce: function(e) {
    wx.navigateTo({
      url: '/pages/classintroduce/classintroduce'
    })
  },
  //跳转结业考试
  goto_graduatetest: function(e) {
    wx.navigateTo({
      url: '/pages/graduatetest/graduatetest'
    })
  }
})