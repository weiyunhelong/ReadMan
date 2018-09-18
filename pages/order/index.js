// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab:0,//选中的tab
    orderlist:[
      {
        orderid:1,
        orderno:'232445',
        orderstatustxt:"待付款",
        goods:[
          {
            id:1,
            imgpath:"http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
            name:"高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
            attr:"颜色:粉红色",
            jifen:10,
            buynum:1
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
        buygoodsnum:2,
        sumprice:30,
        orderstatus:1
      },
      {
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
        sumprice: 10,
        orderstatus: 2
      },
      {
        orderid: 3,
        orderno: '232445',
        orderstatustxt: "待收款",
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
        sumprice: 10,
        orderstatus: 3
      },
      {
        orderid: 4,
        orderno: '232445',
        orderstatustxt: "待发货",
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
        sumprice: 10,
        orderstatus: 4
      },
      {
        orderid: 5,
        orderno: '232445',
        orderstatustxt: "已取消",
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
        sumprice: 10,
        orderstatus: 5
      },
    ],//订单列表
    chkorderid: 0, //取消订单
    showModalStatus: false, //弹窗部分
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      chktab:options.id
    })
  },
  //切换tab
  chktabopt:function(e){
    var id=e.currentTarget.dataset.id;
    this.setData({
      chktab:id
    })
  },
  //跳转到订单详情
  godetail:function(e){
    wx.navigateTo({
      url: '../order/detail?id='+e.currentTarget.dataset.id+"&status="+e.currentTarget.dataset.status
    })
  },
  //取消订单
  cancelopt:function(e){
    var that=this;

    //参数部分
    var chkorderid=e.currentTarget.dataset.id;
    that.setData({
      chkorderid: chkorderid
    }) 
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
  okopt:function(){
    var that=this;
    var id=that.data.orderid;
    that.util("close"); 
  },
  //支付
  payforopt:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;
    wx.showToast({
      title: '支付成功',
      duration:2000,
      mask:true
    })
  },
  //查看物流
  viewwuliuopt: function (e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../wuliu/index',
    })
  },
  //确定收货
  signopt:function(e){
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
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