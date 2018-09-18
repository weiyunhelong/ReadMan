// pages/find/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//id值
    status:0,//状态值
    cover: "",
    leasttime: "",
    title: "",
    datetime: "",
    address: "",
    booknum: 0,
    filter:"",
    intro:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //接受参数
    that.setData({
      id: options.id,//id值
      status: options.status,//状态值
    })

    that.initData();
  },
  //活动详情数据
  initData:function(){
    var that=this;
    //参数部分
    var id=that.data.id;

    that.setData({
      cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537024251811&di=86b603f33f97fccec43326b2c055b7cd&imgtype=0&src=http%3A%2F%2Fs9.sinaimg.cn%2Fmw690%2F5f7db49atx6CX6vz6WY38%26690",
      leasttime: "2小时",
      title: "活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈活动标题，做多显示两行，溢出隐藏（结尾用省略号）啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
      datetime: "2018.12.12 12:00-14:00",
      address: "广东-广州  珠江新城补习班珠江新城补习班 ",
      booknum: 81528,
      filter:"该机构学院报名或3星级以上用户可报名",
      intro: "<div style='font-size:15px;color#333;'>图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插后台编辑图文内容穿插</div><div style='text-align:center;'><img src='http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg' style='width:351px;height:132px;'/></div>", //富文本
    })
  },
  //报名操作
  bookopt:function(){
    wx.navigateTo({
      url: '../find/book?id='+this.data.id,
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