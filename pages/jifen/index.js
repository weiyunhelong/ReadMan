// pages/jifen/index.js
var requesturl = getApp().globalData.requesturl;//请求接口的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab: 0,//tab选中
    jifen:332,//积分
    intro: "<div style='font-size:15px;color#333;'>图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插</div><div style='text-align:center;'><img src='http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg' style='width:351px;height:132px;'/></div>", //富文本
    contenth:0,//规格的高度
    recordlsit:[
      {
        id:1,
        name:"签到",
        time:"2018-02-23 12:34",
        jifen:1
      },
      {
        id: 2,
        name: "兑换商品（订单号：2345653）",
        time: "2018-02-23 12:34",
        jifen: -1
      },
      {
        id: 3,
        name: "注册机构会员",
        time: "2018-02-23 12:34",
        jifen: 500
      },
      {
        id: 4,
        name: "兑换商品（订单号：2345653）",
        time: "2018-02-23 12:34",
        jifen: 1
      },      
    ],//记录
    recordh:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          contenth:res.screenHeight*0.65,
          recordh: res.screenHeight*0.74,
        })
      },
    })
  },
  //跳转到充值
  gorecharge:function(){
    wx.navigateTo({
      url: '../recharge/index',
    })
  },
  //积分的切换
  chktabopt: function (e) {
    var that=this;
    var id=e.currentTarget.dataset.id;
    that.setData({
      chktab:id
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
    //获取积分的信息
    that.initData();
  },
  //获取积分的信息
  initData:function(){
   var that=this;
   //请求接口获取值
   wx.request({
     url: requesturl +'getMyPointsHome',
     data: {
       "Authorization":getApp().globalData.Token
     },
     header: {
       "Content-Type":"application/x-www-form-urlencoded",
       "Authorization": getApp().globalData.Token
     },
     method: 'POST',
     success: function(res) {
       console.log("获取积分的值:");
       console.log(res);

       if(res.data.code==0){
         that.setData({
           jifen: res.data.resultObject.points,//积分
           intro: res.data.resultObject.pointsrule, //富文本
           recordlsit: res.data.resultObject.pointsList,//积分明细
         })
       }
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