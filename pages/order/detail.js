// pages/order/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderid:0,//订单id
    orderstatus: 0,//订单状态 1->待付款 2->已完成 3->待收款 4->待发货 5->已取消
    address: {
      username: "王嘉尔",
      userphone: "1567655567",
      addresstxt: "广东省广州市天河区华南公园"
    }, //地址信息
    order: {
      orderid: 2,
      orderno: '232445',
      orderstatustxt: "已完成",
      goods: [
        {
          id: 1,
          imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
          name: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
          attr: "颜色:粉红色",
          jifen: 10,
          buynum: 1
        }
      ],
      buygoodsnum: 1,
      sumprice: 20,
      ticket:10,
      payfor:10,
      orderstatus: 2
    },//订单信息
    createtime:"2018-12-12 12:12:12",//创建时间
    payfortime:"2018-12-12 12:12:12",//支付时间
    sentime:"2018-12-12 12:12:12",//发货时间
    finishtime: "2018-12-12 12:12:12",//完成时间
    wuliu:{
      sendtype:"顺丰快递",
      paytype:"在线支付",
      sendno:"363534673643423434",
      record:[
        {
          id:1,
          address:"【广州市】您的快递已签收",
          time:" 2016-03-23 08:45:23"
        },
        {
          id:2,
          address: "【广州市】快递已到达石井二站",
          time: " 2016-03-23 08:45:21"
        },
        {
          id: 3,
          address: "【广州市】您的快递已签收",
          time: " 2016-03-23 08:45:20"
        }
      ]
    },//物流信息
    chkorderid:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      orderid: options.id,
      orderstatus: options.status
    })
  },
  //申请推荐
  gorefund:function(){
    wx.navigateTo({
      url: '../refund/index?id=' + this.data.orderid,
    })
  },
  //取消订单
  cancelopt:function(e){
    var that = this;
    that.util("open");  
  },
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  util: function (currentStatu) {
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
    setTimeout(function () {
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
  //确定按钮
  okopt: function () {
    var that = this;
    var id = that.data.orderid;
    that.util("close");
  },
  //支付
  payforopt: function (e) {
    var that = this;
    //参数部分
    var id = that.data.orderid;
    wx.showToast({
      title: '支付成功',
      duration: 2000,
      mask: true
    })
  },
  //查看物流
  viewwuliuopt: function () {
    var that = this;
    //参数部分
    var id = that.data.orderid;
    wx.navigateTo({
      url: '../wuliu/index',
    })
  },
  //确定收货
  signopt: function () {
    var that = this;
    //参数部分
    var id = that.data.orderid;
    wx.showToast({
      title: '签收成功',
      duration: 2000,
      mask: true
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