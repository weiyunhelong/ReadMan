// pages/ticket/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab:1,//选中的菜单
    quanlist:[],//券列表
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
   //参数部分
   var chktab = that.data.chktab;

   var quanlist=[
     {
       id:1,
       jifen:100,
       startdate:"2018-03-23",
       enddate:"2018-12-12"
     },
     {
       id: 2,
       jifen: 200,
       startdate: "2018-03-23",
       enddate: "2018-12-12"
     },
   ];

   that.setData({
     quanlist: quanlist
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