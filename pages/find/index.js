// pages/find/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabchk:0,//tab部分\
    actlist:[],//列表数据
    showModalStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取活动
    that.initActData();
  },
  //点击菜单
  chktabopt:function(e){
    var that=this;

    //参数部分
    var id=e.currentTarget.dataset.id;
    that.setData({
      tabchk:id
    })
    //获取活动
    that.initActData();
  },
  //获取活动
  initActData:function(){
    var that=this;
    //参数
    var tabchk = that.data.tabchk;
    //获取列表数据
    var actlist=[
     { 
       id:1,
        cover:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537024251811&di=86b603f33f97fccec43326b2c055b7cd&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F5f7db49atx6CX6vz6WY38%26690",
       leasttime:"2小时",
        title:"活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        datetime:"2018.12.12 12:00-14:00",
        address:"广东-广州  珠江新城补习班珠江新城补习班 ",
        booknum: 81528,
        status:1
     },
      {
        id: 2,
        cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537024251811&di=86b603f33f97fccec43326b2c055b7cd&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F5f7db49atx6CX6vz6WY38%26690",
        leasttime: "2小时",
        title: "活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        datetime: "2018.12.12 12:00-14:00",
        address: "广东-广州  珠江新城补习班珠江新城补习班 ",
        booknum: 81528,
        status: 2
      }, 
      {
        id: 3,
        cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537024251811&di=86b603f33f97fccec43326b2c055b7cd&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F5f7db49atx6CX6vz6WY38%26690",
        leasttime: "2小时",
        title: "活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        datetime: "2018.12.12 12:00-14:00",
        address: "广东-广州  珠江新城补习班珠江新城补习班 ",
        booknum: 81528,
        status: 3
      },
      {
        id: 4,
        cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537024251811&di=86b603f33f97fccec43326b2c055b7cd&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F5f7db49atx6CX6vz6WY38%26690",
        leasttime: "已结束",
        title: "活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        datetime: "2018.12.12 12:00-14:00",
        address: "广东-广州  珠江新城补习班珠江新城补习班 ",
        booknum: 81528,
        status: 4
      },
      {
        id: 5,
        cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537024251811&di=86b603f33f97fccec43326b2c055b7cd&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F5f7db49atx6CX6vz6WY38%26690",
        leasttime: "进行中",
        title: "活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        datetime: "2018.12.12 12:00-14:00",
        address: "广东-广州  珠江新城补习班珠江新城补习班 ",
        booknum: 81528,
        status: 5
      },
    ];

    that.setData({
      actlist: actlist
    })
  },
  //活动报名
  gobookact:function(e){
    var id=e.currentTarget.dataset.id;
    /*
    wx.navigateTo({
      url: '../find/detail?id='+id,
    })
    */
    this.setData({
      showModalStatus:true
    })
  },
  //点击确定按钮
  okopt:function(){
    this.setData({
      showModalStatus: false
    })
  },
  //活动详情
  godetail: function (e) {
    var id = e.currentTarget.dataset.id;
    var status = e.currentTarget.dataset.status;
    wx.navigateTo({
      url: '../find/detail?id=' + id + "&status=" + status,
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