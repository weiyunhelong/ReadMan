// pages/refund/list.js
var requesturl = getApp().globalData.requesturl; //接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderlist: [{
        orderid: 1,
        orderno: '232445',
        orderstatustxt: "退款成功",
        goods: [{
            id: 1,
            imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr: "颜色:粉红色",
            jifen: 10,
            buynum: 1
          },
          {
            id: 2,
            imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr: "颜色:粉红色",
            jifen: 20,
            buynum: 1
          }
        ],
        buygoodsnum: 2,
        sumprice: 30,
        orderstatus: 1
      },
      {
        orderid: 2,
        orderno: '232445',
        orderstatustxt: "退款失败",
        goods: [{
          id: 1,
          imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
          name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
          attr: "颜色:粉红色",
          jifen: 10,
          buynum: 1
        }],
        buygoodsnum: 1,
        sumprice: 10,
        orderstatus: 2
      },
      {
        orderid: 3,
        orderno: '232445',
        orderstatustxt: "退款审核中",
        goods: [{
          id: 1,
          imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
          name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
          attr: "颜色:粉红色",
          jifen: 10,
          buynum: 1
        }],
        buygoodsnum: 1,
        sumprice: 10,
        orderstatus: 3
      },
    ], //订单列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //跳转到详情页面
  godetail: function(e) {
    var that = this;
    wx.navigateTo({
      url: '../tuikuan/detail?id=' + e.currentTarget.dataset.id + "&status=" + e.currentTarget.dataset.status
    })
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
    var that = this;
    //获取列表信息
    that.initData();
  },
  //获取列表信息
  initData: function() {
    var that = this;
    //请求接口获取数据
    wx.request({
      url: requesturl + 'getReturnGoodsList',
      data: '',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取列表的值");
        console.log(res);
        if (res.data.code == 0) {
          that.setData({
            orderlist: res.data.resultObject
          })
        } else {
          console.log("获取列表的值失败!");
        }
      }
    })
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