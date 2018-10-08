// pages/ticket/index.js
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab:1,//选中的菜单
    quanlist:[],//积分券列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this;
     //获取券列表
     that.initTicket();
  },
  //获取券列表
 initTicket:function(){
   var that=this;

   //获取优惠券列表的值
   wx.request({
     url: requesturl +'getCouponListByFlag',
     data: {
       flag: that.data.chktab-1
     },
     header: {
       "Content-Type":"application/x-www-form-urlencoded",
       "Authorization": getApp().globalData.Token
     },
     method: 'POST',
     success: function(res) {
       console.log("获取列表的数据:");
       console.log(res);

       if(res.data.code==0){
         that.setData({
           quanlist: res.data.resultObject,//未使用券列表
         })
       }else{
         console.log("获取列表数据失败!");
       }
     }
   })
 },
 //菜单的切换
  chktabopt:function(e){
    var that=this;
    var id=e.currentTarget.dataset.id;
    that.setData({
      chktab: id
    })
    //获取券列表
    that.initTicket();
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