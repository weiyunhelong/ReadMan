// pages/shopcart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   shopcartlist:[],//购物车列表
   chkgoods:"",//选中的订单
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取购物车列表
    that.initShopCart();
  },
  //获取购物车列表
  initShopCart:function () {
    var that=this;

    //请求接口，获取数据
    var shopcartlist=[
      {
       id:1,
        isTouchMove:false,
        imgpath:"http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
        title:"高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
        color:"粉红色",
        jifen:10,
        buynum:1,
        ischk:false
      },
      {
        id: 2,
        isTouchMove: false,
        imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
        title: "高级文具盒标题名称不超过两排+女生最爱文具系列",
        color: "粉红色",
        jifen: 10,
        buynum: 1,
        ischk: false
      },
    ];
    that.setData({
      shopcartlist: shopcartlist
    })
  },
  //单个项目的选中
  chkiconopt:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;
    var shopcartlist = that.data.shopcartlist;
    var txtarry=[];
    //循环遍历
    for (var i = 0; i < shopcartlist.length;i++){
      if (id == shopcartlist[i].id){
        txtarry[i]={
          id: shopcartlist[i].id,
          isTouchMove: false,
          imgpath: shopcartlist[i].imgpath,
          title: shopcartlist[i].title,
          color: shopcartlist[i].color,
          jifen: shopcartlist[i].jifen,
          buynum: shopcartlist[i].buynum,
          ischk: !shopcartlist[i].ischk
        };
      }else{
        txtarry[i] = shopcartlist[i];
      }
    }
    that.setData({
      shopcartlist: txtarry
    })
    //获取选中的值
    that.getChkGoods();
  },
  //减少操作
  reduceopt:function(e){
    var that=this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var shopcartlist = that.data.shopcartlist;
    var txtarry = [];

    //循环遍历
    for (var i = 0; i < shopcartlist.length; i++) {
      if (id == shopcartlist[i].id) {
        txtarry[i] = {
          id: shopcartlist[i].id,
          isTouchMove: false,
          imgpath: shopcartlist[i].imgpath,
          title: shopcartlist[i].title,
          color: shopcartlist[i].color,
          jifen: shopcartlist[i].jifen,
          buynum: shopcartlist[i].buynum - 1 > 0 ? shopcartlist[i].buynum - 1:1,
          ischk: shopcartlist[i].ischk
        };
      } else {
        txtarry[i] = shopcartlist[i];
      }
    }
    that.setData({
      shopcartlist: txtarry
    })
  },
  //新增操作
  addopt: function (e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var shopcartlist = that.data.shopcartlist;
    var txtarry = [];

    //循环遍历
    for (var i = 0; i < shopcartlist.length; i++) {
      if (id == shopcartlist[i].id) {
        txtarry[i] = {
          id: shopcartlist[i].id,
          isTouchMove: false,
          imgpath: shopcartlist[i].imgpath,
          title: shopcartlist[i].title,
          color: shopcartlist[i].color,
          jifen: shopcartlist[i].jifen,
          buynum: shopcartlist[i].buynum +1,
          ischk:  shopcartlist[i].ischk
        };
      } else {
        txtarry[i] = shopcartlist[i];
      }
    }
    that.setData({
      shopcartlist: txtarry
    })
  },
  //手指触摸动作开始 记录起点X坐标
  ntouchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.shopcartlist.forEach(function (v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      nstartX: e.changedTouches[0].clientX,
      nstartY: e.changedTouches[0].clientY,
      shopcartlist: this.data.shopcartlist
    })
  },
  //滑动事件处理
  ntouchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.nstartX, //开始X坐标
      startY = that.data.nstartY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
          X: touchMoveX,
          Y: touchMoveY
        });
    console.log("滑动的距离:" + angle)
    var shopcartlist = that.data.shopcartlist;
    shopcartlist.forEach(function (v, i) {
      v.isTouchMove = false;
      //滑动距离度角 return
      if (i == index) {
        if (touchMoveX > startX) //右滑
        {
          v.isTouchMove = false;
        } else if (Math.abs(angle) > 80) { //左滑
          v.isTouchMove = true;
        }
      }
    })
    //更新数据
    that.setData({
      shopcartlist: shopcartlist
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X;
    var _Y = end.Y - start.Y;

    return _X;
  },
  //删除事件
  ndel: function (e) {
    this.data.shopcartlist.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      shopcartlist: this.data.shopcartlist
    })

    //参数部分
    var id = e.currentTarget.dataset.id;
    wx.showToast({
      title: '删除成功',
      mask: true
    })
  },
  //全选
  allchkopt:function(){
    var that=this;
    var txtarry=[];
    //循环遍历，重置选中
    var shopcartlist = that.data.shopcartlist;
    for (var i = 0; i < shopcartlist.length;i++){
      txtarry[i]={
        id: shopcartlist[i].id,
        isTouchMove: false,
        imgpath: shopcartlist[i].imgpath,
        title: shopcartlist[i].title,
        color: shopcartlist[i].color,
        jifen: shopcartlist[i].jifen,
        buynum: shopcartlist[i].buynum,
        ischk: true
      };
    }
    that.setData({
      shopcartlist: txtarry
    })
    //获取选中的值
    that.getChkGoods();
  },
  //获取兑换的商品的值
  getChkGoods:function(){
    var that=this;
    var chkgoods="";
    var shopcartlist = that.data.shopcartlist;
    for (var i = 0; i < shopcartlist.length; i++) {
      if (shopcartlist[i].ischk){
        chkgoods += shopcartlist[i].id+",";
      }
    }
    that.setData({
      chkgoods: chkgoods
    })
  },
  //去兑换
  chargeopt:function(){
    wx.navigateTo({
      url: '../payfor/index',
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