// pages/goods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, //预设当前项的值
    typeid: '0', //分类id
    scrollLeft: 0, //tab标题的滚动条位置
    menulist: [], //菜单列表
    goodslist: [], //商品列表的值
    chkgoodsnum:2,//购物车个数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var that = this;

    //获取到菜单列表的值
    that.initMenu();
    //获取到商品列表的值
    that.initGoods();
  },
  //获取到菜单列表的值
  initMenu: function() {
    var that=this;

    //参数部分
    var menulist=[
      {
        id: 0, name:"全部"
      },
      {
        id: 1, name: "分类一"
      },
      {
        id: 2, name: "分类二"
      }, {
        id: 3, name: "分类三"
      }, {
        id: 4, name: "分类四"
      }, {
        id: 5, name: "分类五"
      },
    ];

    that.setData({
      menulist: menulist
    })
  },
  // 点击标题切换当前页时改变样式
  swichNav: function(e) {
    var that = this;
    var cur = e.target.dataset.current;
    var id = e.target.dataset.id;
    console.log("点击的菜单:");
    console.log(e);
    if (that.data.currentTab == cur) {
      return false;
    } else {
      that.setData({
        currentTab: parseInt(cur),
        typeid: id
      })
      that.checkCor();
    }
    //获取到商品列表
    that.initGoods();
  },
  //获取到商品列表的值
  initGoods: function() {
    var that = this;
    //参数的值
    var typeid = that.data.typeid;

    //请求接口获取到商品列表的值
    var goodslist = [{
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
      }, {
        id: 5,
        imgpath: "/resources/mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
      {
        id: 6,
        imgpath: "/resources/mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
      {
        id: 7,
        imgpath: "/resources/mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
      {
        id: 8,
        imgpath: "/resources/mall/goods.png",
        name: "多功能文具盒+精美双 肩背书包",
        jifen: 10
      },
    ];

    //赋值部分
    that.setData({
      goodslist: goodslist
    })
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function() {
    var that = this;
    if (that.data.currentTab > 3) {
      var num = parseInt(that.data.currentTab / 3);
      that.setData({
        scrollLeft: 150 * num
      })
    } else {
      that.setData({
        scrollLeft: 0
      })
    }
  },
  /*跳转到商品详情部分*/
  gogoods: function (e) {
    var that=this;
    wx.navigateTo({
      url: '../goods/detail?id='+e.currentTarget.dataset.id,
    })
  },
  //跳转到购物车
  gocart:function(){
    wx.navigateTo({
      url: '../shopcart/index',
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