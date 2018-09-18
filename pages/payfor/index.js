// pages/payfor/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      username: "王嘉尔",
      userphone: "1567655567",
      addresstxt: "广东省广州市天河区华南公园"
    }, //地址信息
    goodslist: [{
        id: 1,
        imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
        title: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
        color: "粉红色",
        jifen: 10,
        buynum: 1
      },
      {
        id: 2,
        imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
        title: "高级文具盒标题名称不超过两排+女生最爱文具系列",
        color: "粉红色",
        jifen: 10,
        buynum: 1
      },
    ], //商品列表
    ticketlist: [{
        id: 1,
        name: "10分积分抵扣券",
        fen: 10,
      },
      {
        id: 2,
        name: "20分积分抵扣券",
        fen: 20,
      },
      {
        id: 3,
        name: "25分积分抵扣券",
        fen: 25,
      },
      {
        id: 4,
        name: "30分积分抵扣券",
        fen: 30,
      },
      {
        id: 5,
        name: "40分积分抵扣券",
        fen: 40,
      },
      {
        id: 6,
        name: "50分积分抵扣券",
        fen: 50,
      },
    ], //优惠券列表
    tindex: 0, //选中的下标
    sumjifen: 90, //总积分
    payfor: 80, //花费积分
    ticketfen: 10, //优惠券分
    showModalStatus: false, //弹窗部分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  //抵扣券的选中
  bindPickerChange: function(e) {
    var that = this;
    //参数部分
    var index = e.detail.value;
    var ticketlist = that.data.ticketlist;
    var ticketfen = ticketlist[index].fen;
    that.setData({
      ticketfen: ticketfen,
      tindex: index
    })

  },
  //跳转到地址
  goaddress: function() {
    wx.navigateTo({
      url: '../address/index?ischkaddress=true',
    })
  },
  //确定订单
  powerDrawer: function(e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function(currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例 
    var animation = wx.createAnimation({
      duration: 200, //动画时长 
      timingFunction: "linear", //线性 
      delay: 0 //0则不延迟 
    });

    // 第2步：这个动画实例赋给当前的动画实例 
    this.animation = animation;

    // 第3步：执行第一组动画 
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存 
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画 
    setTimeout(function() {
      // 执行第二组动画 
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象 
      this.setData({
        animationData: animation
      })

      //关闭 
      if (currentStatu == "close") {
        this.setData({
          showModalStatus: false
        });
      }
    }.bind(this), 200)
    // 显示 
    if (currentStatu == "open") {
      this.setData({
        showModalStatus: true
      });
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