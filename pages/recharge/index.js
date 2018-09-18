// pages/recharge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chargelist: [], //充值列表
    price: 0, //充值的钱
    isother: false, //点击其他
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    //获取充值列表
    that.initCharge();
  },
  //获取充值列表
  initCharge: function() {
    var that = this;

    //获取列表数据
    var chargelist = [{
        id: 1,
        name: "充值100积分",
        price: 20,
        ischk: false
      },
      {
        id: 2,
        name: "充值100积分",
        price: 20,
        ischk: false
      },
      {
        id: 3,
        name: "充值100积分",
        price: 20,
        ischk: false
      },
      {
        id: 4,
        name: "充值100积分",
        price: 20,
        ischk: false
      },
    ];

    that.setData({
      chargelist: chargelist
    })
  },
  //选中充值的选项
  chkcharge: function(e) {
    var that = this;

    var id = e.currentTarget.dataset.id;

    //参数部分
    var txtarry = [];
    var chargelist = that.data.chargelist, //充值列表
      isother = false, //点击其他
      price = 0; //充值的钱

    //充值数据
    for (var i = 0; i < chargelist.length; i++) {
      if (chargelist[i].id == id) {
        txtarry[i] = {
          id: chargelist[i].id,
          name: chargelist[i].name,
          price: chargelist[i].price,
          ischk: true
        };
        price = chargelist[i].price;
      } else {
        txtarry[i] = {
          id: chargelist[i].id,
          name: chargelist[i].name,
          price: chargelist[i].price,
          ischk: false
        };
      }
    }
    that.setData({
      chargelist: txtarry,
      price: price,
      isother: false, //点击其他
    })
  },
  //点击其他
  chkotheropt: function() {
    var that = this;
    //获取充值列表
    that.initCharge();
    //赋值选中的值
    that.setData({
      isother: true, //点击其他
      price: 0 //充值的钱
    })
  },
  //减少操作
  reduceopt: function() {
    var that = this;
    //参数部分
    var price = that.data.price;
    that.setData({
      price: price - 1 > 0 ? price - 1 : 0
    })
  },
  //获取输入的钱
  getothernum: function(e) {
    var that = this;
    that.setData({
      price: e.detail.value
    })
  },
  //增加操作
  addopt: function() {
    var that = this;
    //参数部分
    var price = that.data.price;
    that.setData({
      price: price + 1
    })
  },
  //充值操作
  chargeopt: function() {
    var that = this;

    //参数部分
    var price = that.data.price;
    console.log("充值的钱:" + price);

    if (price == 0) {
      wx.showToast({
        title: '请选择充值的金钱',
        mask: true,
        duration: 2000,
        icon: "none"
      })
    } else {
      wx.showToast({
        title: '充值成功',
        mask: true,
        duration: 2000
      })
      setTimeout(function() {
        wx.redirectTo({
          url: '../recharge/result',
        })
      }, 2000)
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})