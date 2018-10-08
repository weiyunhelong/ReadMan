// pages/goods/detail.js
var globalimgurl = getApp().globalData.globalimgurl; //图片的地址
var requesturl = getApp().globalData.requesturl; //接口的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //商品id
    goodscover: "", //商品封面
    goodsbrief: "", //商品简介
    notelist: [], //标签列表
    goodsjifen: 0, //积分数
    salenum: 0, //销售个数
    goodsintro: "", //富文本
    cartnum: 0, //购物车个数  
    showphonev: false, //  是否显示客户服务  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //接受参数
    that.setData({
      id: parseInt(options.id), //商品id
    })

  },
  //获取商品的详情
  getGoodsInfo: function() {
    var that = this;
    //参数部分
    var id = that.data.id;

    //请求接口获取参数
    wx.request({
      url: requesturl + 'getGoodsDetail',
      data: {
        goodsid: id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("获取商品的详情:");
        console.log(res);

        if (res.data.code == 0) {
          that.setData({
            goodscover: res.data.resultObject.goods.image, //商品封面
            goodsbrief: "开发宝宝的脑力,并不像你想象的那么复杂,你得记住关键的两点: 大脑神经发育的法则:“不用它,就失去它.” 没有受", //商品简介
            notelist: ['便签一', '便签二', '便签三'], //res.data.resultObject.goods.goodslabel, //标签列表
            goodsjifen: res.data.resultObject.goods.points, //积分数
            salenum: res.data.resultObject.goods.salesvolume, //销售个数
            goodsintro: res.data.resultObject.goods.goodsdesc, //富文本
          })
        } else {
          console.log("获取商品的详情失败！" + res.data.message);
        }
      }
    })
    //结束标示符号
  },
  //点击购物车
  gocart: function() {
    wx.navigateTo({
      url: '../shopcart/index',
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
  showChange: function() {
    var that = this;
    that.setData({
      showphonev: false
    })
  },
  //加入到购物车
  addcartopt: function() {
    var that = this;
    //参数部分
    var id = that.data.id;


    //添加到购物车
    wx.request({
      url: requesturl + 'addCart',
      data: {
        goodsid: id,
        goodsspecid: 1,
        quantity: 1
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("添加到购物车:");
        console.log(res);

        if (res.data.code == 0) {
          that.setData({
            cartnum: that.data.cartnum + 1
          })
          wx.showToast({
            title: '加入购物车成功',
            duration: 2000,
            mask: true
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '加入购物车失败!' + res.data.message,
            showCancel: false
          })
        }
      }
    })
    //结束标示符
  },
  //立即购物
  buyopt: function() {
    var that = this;
    //参数部分
    var id = that.data.id;
    //请求立即购物
    wx.request({
      url: requesturl + 'buyNow',
      data: {
        goodsspecid:id,
        quantity:1
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("立即购买的结果:");
        console.log(res);  

        if(res.data.code==0){
           wx.showToast({
             title: '购买成功!',
             duration:2000,
             mask:true
           })
        } else{
          wx.showToast({
            title: '购买失败!',
            duration: 2000,
            mask: true,
            icon:"none"
          })
        }     
      }
    })
    //结束标识符
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

    //获取商品的详情
    that.getGoodsInfo();

    //获取购物车的数据
    that.getShopcarts();
  },
  //获取购物车的数据
  getShopcarts: function() {
    var that = this;
    //获取用户的积分
    wx.request({
      url: requesturl + 'getMyCartCount',
      data: '',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取购物车的数量:");
        console.log(res);
        if (res.data.code == 0) {
          that.setData({
            cartnum: res.data.resultObject
          })
        } else {
          console.log("购物车失败的原因:" + res.data.message);
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