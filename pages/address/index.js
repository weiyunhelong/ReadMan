// pages/address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ischkaddress:false,//是否选择地址
    addresslist:[],//地址列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      ischkaddress: options.ischkaddress
    })
    //获取地址列表
    that.initGetAddress();
  },
  //获取地址列表
  initGetAddress:function(){
    var that=this;

    var addresslist=[
      {
        id:1,
        username:"王嘉尔",
        phone:"1567655567",
        address:"广东省广州市天河区华南公园",
        isdefault:true
      },
      {
        id: 2,
        username: "王嘉尔",
        phone: "1567655567",
        address: "广东省广州市天河区华南公园",
        isdefault: false
      },
    ];

    that.setData({
      addresslist: addresslist
    })
  },
  //选择收货地址
  chkaddress:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;
    var ischkaddress = that.data.ischkaddress;
    var addresslist = that.data.addresslist;

    var addressobj={};
    for (var i = 0; i < addresslist.length;i++){
      if (id == addresslist[i].id){
        addressobj = addresslist[i];
      }
    }
    if (ischkaddress){
      
      wx.navigateBack({
        delta:1
      })
    }
  },
  //设置成为默认地址
  chkdefault:function(e){
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;  
    var addresslist = that.data.addresslist;

    var txtarry = [];
    for (var i = 0; i < addresslist.length; i++) {
      if (id == addresslist[i].id) {
        txtarry[i] ={
          id: addresslist[i].id,
          username: addresslist[i].username,
          phone: addresslist[i].phone,
          address: addresslist[i].address,
          isdefault: true
        };
      }else{
        txtarry[i] = {
          id: addresslist[i].id,
          username: addresslist[i].username,
          phone: addresslist[i].phone,
          address: addresslist[i].address,
          isdefault: false
        };
      }
    }    
    that.setData({
      addresslist: txtarry
    })
  },
  //编辑操作
  editopt:function(e){
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var addresslist = that.data.addresslist;

    var addressobj = {};
    for (var i = 0; i < addresslist.length; i++) {
      if (id == addresslist[i].id) {
        addressobj = addresslist[i];
      }
    }
 
    wx.navigateTo({
      url: '../address/edit?id='+id,
    })
  },
  //删除操作
  delopt:function(e){
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    var addresslist = that.data.addresslist;

    var txtarry = [];
    var index=0;
    for (var i = 0; i < addresslist.length; i++) {
      if (id != addresslist[i].id) {
        txtarry[index] = {
          id: addresslist[i].id,
          username: addresslist[i].username,
          phone: addresslist[i].phone,
          address: addresslist[i].address,
          isdefault: addresslist[i].isdefault
        };
        index++;
      }
    }

    that.setData({
      addresslist: txtarry
    })
  },
  //新增地址
  addopt:function(){
    wx.navigateTo({
      url: '../address/edit?id=0'
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