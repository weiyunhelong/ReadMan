// pages/my/index.js
var globalimgurl = getApp().globalData.globalimgurl;
var requesturl = getApp().globalData.requesturl;//获取接口的值
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topbackimg:"",//顶部背景图
    /******第一部分******/
    usertx: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537248217567&di=eb450f05b118bdf89deb06d095d4f6c1&imgtype=0&src=http%3A%2F%2Fs14.sinaimg.cn%2Fmw690%2F001t9U6Czy6LCmMeEz3ed%26690",//用户头像
    username:"代用名",//用户昵称
    xinglist:[0,1,2,3,4,5],//星列表
    xing:2,//星个数
    userphone:"136-***-2345",//手机号码
    /******第二部分******/
    zhengnum:6,//证书的个数
    titlenum:4,//标签个数
    jifennum:4,//积分的值
    /******第三部分******/
    payfornum: 6,//待付款个数
    sendnum: 0,//待发货个数
    signnum: 2,//待收货个数
    refundnum:1,//退款个数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    that.setData({
      topbackimg: globalimgurl +"wode_bg/wode_bg@2x.png"
    })
  },
  //编辑用户信息
  goeditmy:function(){
    wx.navigateTo({
      url: '../userinfo/index',
    })
  },
  //证书墙
  gozhengshu: function () {
    wx.navigateTo({
      url: '../zhengshu/index',
    })
  },
  //标签
  gotitle: function () {
    wx.navigateTo({
      url: '../title/index',
    })
  },
  //积分
  gojifen: function () {
    wx.navigateTo({
      url: '../jifen/index',
    })
  },
  //全部订单
  goallorder: function () {
    wx.navigateTo({
      url: '../order/index?id=0',
    })
  },
  //订单状态
  goorder: function (e) {
    wx.navigateTo({
      url: '../order/index?id='+e.currentTarget.dataset.id,
    })
  },
  //退款后
  gorefund:function(){
    wx.navigateTo({
      url: '../tuikuan/index',
    })
  },
  //我的活动
  goactivity:function(){
    wx.navigateTo({
      url: '../activity/index',
    })
  },
  //购物车
  goshopcart:function(){
    wx.navigateTo({
      url: '../shopcart/index',
    })
  },
  //积分券
  goquan: function () {
    wx.navigateTo({
      url: '../ticket/index',
    })
  },
  //教师
  goteacher:function(){
    wx.navigateTo({
      url: '../teacher/index',
    })
  },
  //签到记录
  gorecord: function () {
    wx.navigateTo({
      url: '../record/index',
    })
  },
  //意见
  gofeedback: function () {
    wx.navigateTo({
      url: '../feedback/index',
    })
  },
  //退出登录
  loginout:function(){
    wx.showToast({
      title: '退出登录',
    })
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
    var that=this;
    //获取用户信息
    that.initData();
  },
  //获取用户信息
  initData:function(){
    var that=this;
    //获取用户信息
    wx.request({
      url: requesturl +'getPersonHome',
      data: {
        "Authorization": getApp().globalData.Token
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取用户信息:");
        console.log(res);

        that.setData({
          zhengnum: res.data.resultObject.certificateCount,//证书数量
          jifennum: res.data.resultObject.points,//积分数量
          payfornum: res.data.resultObject.noPayCount,//待付款数量
          signnum: res.data.resultObject.noPayCount,//待收货数量
        })
      }
    })
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