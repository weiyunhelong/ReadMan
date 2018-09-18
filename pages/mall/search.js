// pages/mall/search.js
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

    var goodslist = [
      {
        id: 1,
        imgpath: "/resources/mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
      {
        id: 2,
        imgpath: "/resources/mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      }
    ];
    that.setData({
      goodslist: goodslist
    })
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
      //that.initGoods();

      var goodslist = [
        {
          id: 1,
          imgpath: "/resources/mall/goods.png",
          name: "多功能文具盒+精美双 肩背书包",
          jifen: 10
        },
        {
          id: 2,
          imgpath: "/resources/mall/goods.png",
          name: "多功能文具盒+精美双 肩背书包",
          jifen: 10
        },
        {
          id: 3,
          imgpath: "/resources/mall/goods.png",
          name: "多功能文具盒+精美双 肩背书包",
          jifen: 10
        },
        {
          id: 4,
          imgpath: "/resources/mall/goods.png",
          name: "多功能文具盒+精美双 肩背书包",
          jifen: 10
        },
      ];
      that.setData({
        goodslist: goodslist
      })
    }else{
      wx.showToast({
        title: '输入商品名称',
        mask:true,
        duration:2000,
        icon:"none"
      })
    }
    
  },
  //取消的点击
  goback:function(){
    wx.redirectTo({
      url: '../mall/index',
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