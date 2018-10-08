// pages/address/index.js
var requesturl = getApp().globalData.requesturl;//请求的接口
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
    
  },
  //获取地址列表
  initGetAddress:function(){
    var that=this;

    //获取请求的结束数据
    wx.request({
      url: requesturl +'getAddressList',
      data: {
        Authorization: getApp().globalData.Token
      },
      header: {
        "Authorization":getApp().globalData.Token,
        "Content-Type":"application/x-www-form-urlencoded"
      },
      method: 'POST',
      success: function(res) {
        console.log("获取地址列表的数据:");
        console.log(res);

        if(res.data.code==0){
          that.setData({
            addresslist: res.data.resultObject})
        }else{
          console.log("获取地址列表失败!");
        }
      }
    })
    //结束标识符
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
    var name = e.currentTarget.dataset.name;
    var phone = e.currentTarget.dataset.phone;
    var provice = e.currentTarget.dataset.provice;
    var city = e.currentTarget.dataset.city;
    var area = e.currentTarget.dataset.area;
    var address = e.currentTarget.dataset.address;
    var isdefault = e.currentTarget.dataset.isdefault;
    
    //设置缓存
    wx.setStorage({
      key: 'addressobj',
      data: {
        id:id,
        name:name,
        phone: phone,
        provice: provice,
        city: city,
        area: area,
        address: address,
        isdefault: isdefault
      },
    })
    //跳转到编辑页面
    wx.navigateTo({
      url: '../address/edit?id='+id,
    })
  },
  //删除操作
  delopt:function(e){
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    
    //请求接口进行删除
    wx.request({
      url: requesturl +'delelteAdress',
      data: {
        addressid:id
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("删除操作的结果:");
        console.log(res);

        if(res.data.code==0){
          //刷新列表
          that.initGetAddress();
        }else{
          wx.showToast({
            title: res.data.message,
            mask:true,
            duration:2000,
            icon:'none'
          })
        }
      }
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
    var that=this;
    //获取地址列表
    that.initGetAddress();
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