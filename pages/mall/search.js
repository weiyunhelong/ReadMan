// pages/mall/search.js
var globalimgurl = getApp().globalData.globalimgurl;//图片地址
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchval:"",//搜索的值
    goodslist:[],//商品的列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //初始化商品数据
    that.initGoods();
  },
  //初始化商品数据
  initGoods: function () {
    var that = this;
    //参数部分
    var searchval = that.data.searchval;//搜索的值
    
    //请求接口获取数据
    wx.request({
      url: requesturl +'getGoodsList',
      data: {
        goodsname: searchval,
        goodsclass:""
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("搜索的结果:");
        console.log(res);

        if(res.data.code==0){
          that.setData({
            goodslist: res.data.resultObject
          })
        }else{
          console.log("搜索的失败!"+res.data.message);
        }
      }
    })
    //结束标识符
  },
  //获取搜索的值
  getsearchval:function(e){
    var that=this;
    //获取搜索的值
    var txtval=e.detail.value;
    if (txtval!=""){
      that.setData({
        searchval: txtval
      })
      that.initGoods();
    }else{
      wx.showToast({
        title: '输入商品名称',
        mask:true,
        duration:2000,
        icon:"none"
      })
    }
    //结束标识符
  },
  //取消的点击
  goback:function(){
    wx.navigateBack({
      delta:1
    })
  },
  //点击商品，进入详情页面
  gogoodsopt:function(e){
    var that=this;

    wx.navigateTo({
      url: '../goods/detail?id='+e.currentTarget.dataset.id
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