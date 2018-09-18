// pages/find/book.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,//活动id
    contactnum:"020-1029288",
    name:"",//姓名
    phone:"",//手机号
    backimg:""
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //接受参数
    that.setData({
      id:options.id
    })
    that.setData({
      backimg: globalimgurl +"lijibaoming_chatu/lijibaoming_chatu@2x.png"
    })
  },
  //得到姓名
  getname:function(e){
    var that=this;

    that.setData({
      name:e.detail.value
    })
  },
  //得到手机号
  getphone: function (e) {
    var that = this;

    that.setData({
      phone: e.detail.value
    })
  },
  //打电话
  makephone:function(){
    var that=this;
    wx.showModal({
      title: '咨询客服',
      content: '拨打电话' + that.data.phone,
      showCancel:false,
      confirmText:"立即咨询",
      success:function(e){
        if(e.confirm){
          wx.makePhoneCall({
            phoneNumber: that.data.phone,
          })
        }
      },
    })
    
  },
  //立即报名
  bookopt:function(){
    var that=this;

    //参数部分
    var name=that.data.name;
    var phone=that.data.phone;
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
   
    //验证必填项
    if(name==""){
      wx.showToast({
        title: '请输入真实姓名',
        icon:"none",
        duration:2000,
        mask:true
      })
    }else if(phone==""){
      wx.showToast({
        title: '请输入手机号码',
        icon: "none",
        duration: 2000,
        mask: true
      })
    } else if (!reg.test(phone)) {
      wx.showToast({
        title: '手机号码错误',
        icon: "none",
        duration: 2000,
        mask: true
      })
    }else{

      //报名成功
      wx.showToast({
        title: '报名成功',
        duration: 2000,
        mask: true
      })

      setTimeout(function(){
        wx.navigateTo({
          url: '../find/result',
        })
      },2000)
    }
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