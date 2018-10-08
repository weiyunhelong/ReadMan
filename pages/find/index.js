// pages/find/index.js
var requesturl=getApp().globalData.requesturl;//接口地址

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabchk:0,//tab部分\
    actlist:[],//列表数据
    showModalStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取活动
    that.initActData();
  },
  //点击菜单
  chktabopt:function(e){
    var that=this;

    //参数部分
    var id=e.currentTarget.dataset.id;
    that.setData({
      tabchk:id
    })
    //获取活动
    that.initActData();
  },
  //获取活动
  initActData:function(){
    var that=this;
    //参数
    var tabchk = that.data.tabchk;
    var apiurl="";
    if(tabchk==0){
      apiurl = "getNearActivityList";
    }else{
      apiurl ="getOtherActivityList";
    }
    //获取列表数据
    wx.request({
      url: requesturl + apiurl,
      data: '',
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("活动列表的数据:");
        console.log(res);
        if(res.data.code==0){
          that.setData({
            actlist: res.data.resultObject
          })
        }else{
          console.log("获取活动列表失败!"+res.data.message);
        }       
      }
    })
    //结束标识符
  },
  //活动报名
  gobookact:function(e){
    var id=e.currentTarget.dataset.id;
    /*
    wx.navigateTo({
      url: '../find/detail?id='+id,
    })
    */
    this.setData({
      showModalStatus:true
    })
  },
  //点击确定按钮
  okopt:function(){
    this.setData({
      showModalStatus: false
    })
  },
  //活动详情
  godetail: function (e) {
    var id = e.currentTarget.dataset.id;
    var status = e.currentTarget.dataset.status;
    wx.navigateTo({
      url: '../find/detail?id=' + id + "&status=" + status,
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