// pages/find/detail.js
var requesturl = getApp().globalData.requesturl;//接口地址

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
    intro:"",
    showphonev: false//弹窗提示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //接受参数
    that.setData({
      id: parseInt(options.id),//id值
      status: options.status,//状态值
    })

    that.initData();
  },
  //活动详情数据
  initData:function(){
    var that=this;
    //参数部分
    var id=that.data.id;
    
    //获取详情数据
    wx.request({
      url: requesturl +'getActivityDetail',
      data: {
        activityid:id
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("活动详情数据:");
        console.log(res);
        
        if(res.data.code==0){
          that.setData({
            cover: res.data.resultObject.image,
            leasttime: "2小时",
            title: res.data.resultObject.title,
            datetime: res.data.resultObject.activitytime,
            address: res.data.resultObject.address,
            booknum: res.data.resultObject.enrollnum,
            filter: res.data.resultObject.conditions,
            intro: res.data.resultObject.content, //富文本
          })
        }else{
          console.log("获取详情数据失败!"+res.data.message);
        }
        //结束标识符 
      }
    })
   
  },
  //报名操作
  bookopt:function(){
    var that=this;
    //判断是否满足报名的条件
    wx.request({
      url: requesturl +'canActivitySignup',
      data: {
        activityid: that.data.id
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("报名的条件:");
        console.log(res);
        if(res.data.code==0){
          wx.navigateTo({
            url: '../find/book?id=' + that.data.id,
          })
        }else{
          wx.showModal({
            title: '提示',
            content: res.data.message,
            showCancel:false
          })
        }
      }
    })
    //结束标识符 
  },
  //咨询操作
  zixunopt:function(){
    this.setData({
      showphonev: true
    })
  },  
  //隐藏弹窗
  showChange: function () {
    var that = this;
    that.setData({
      showphonev: false
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