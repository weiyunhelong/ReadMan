// pages/address/edit.js
var requesturl = getApp().globalData.requesturl; //请求的接口
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0, //地址id
    isaddopt: true, //是否是新增地址
    username: "", //收货人姓名
    phone: "", //手机号码
    region: ["广东", "广州", "天河区"], //所在地区
    address: "", //详细地址
    isdefault: false, //是否是默认地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    //设置参数
    that.setData({
      id: parseInt(options.id),
      isaddopt: parseInt(options.id) == 0 ? true : false
    })
    //初始化地址信息
    that.InitAddressInfo();
  },
  //初始化地址信息
  InitAddressInfo: function() {
    var that = this;
    if (!that.data.isaddopt) {
      //获取编辑用户的信息
      wx.getStorage({
        key: 'addressobj',
        success: function(res) {
          that.setData({
            username: res.data.name, //收货人姓名
            phone: res.data.phone, //手机号码
            region: [res.data.provice, res.data.city, res.data.area], //所在地区
            address: res.data.address, //详细地址
            isdefault: res.data.isdefault == '1' ? true : false, //是否是默认地址
          })
        },
      })
      //结束标识符
    }
  },
  //获取收货人名
  getusername: function(e) {
    var that = this;

    that.setData({
      username: e.detail.value
    })
  },
  //获取手机号
  getphone: function(e) {
    var that = this;

    that.setData({
      phone: e.detail.value
    })
  },
  //获取所在地区
  bindRegionChange: function(e) {
    var that = this;

    that.setData({
      region: e.detail.value
    })
  },
  //获取详细地址
  getaddress: function(e) {
    var that = this;

    that.setData({
      address: e.detail.value
    })
  },
  //获取设置默认地址
  defaultopt: function(e) {
    var that = this;

    that.setData({
      isdefault: e.detail.value
    })
  },
  //保存操作
  saveopt: function() {
    var that = this;
    //参数部分
    var username = that.data.username, //收货人姓名
      phone = that.data.phone, //手机号码
      region = that.data.region, //所在地区
      address = that.data.address, //详细地址
      isdefault = that.data.isdefault; //是否是默认地址

    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;

    //验证必填项
    if (username == "") {
      wx.showToast({
        title: '请输入收货人',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else if (phone == "") {
      wx.showToast({
        title: '请输入手机号',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else if (!reg.test(phone)) {
      wx.showToast({
        title: '手机号格式错误',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else if (address == "") {
      wx.showToast({
        title: '请输入详细地址',
        icon: "none",
        mask: true,
        duration: 2000
      })
    } else {

      /**保存操作**/
      //新增
      if (that.data.id == 0) {
        wx.request({
          url: requesturl + 'addAdress',
          data: {
            name: username,
            phone: phone,
            provice: region[0],
            city: region[1],
            area: region[2],
            address: address,
            defaultflag: isdefault == '1' ? true : false
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": getApp().globalData.Token
          },
          method: 'POST',
          success: function(res) {
            console.log("新增地址的结果:");
            console.log(res);

            if (res.data.code == 0) {
              wx.showToast({
                title: '保存成功',
                mask: true,
                duration: 2000
              })
              setTimeout(function() {
                wx.navigateBack({
                  delta: 1
                })
              }, 2000)
            } else {
              wx.showToast({
                title: res.data.massage,
                icon: "none",
                duration: 2000,
                mask: true
              })
            }
          }
        })
      } else { //编辑地址
        wx.request({
          url: requesturl + 'updateAdress',
          data: {
            addressid: that.data.id,
            name: username,
            phone: phone,
            provice: region[0],
            city: region[1],
            area: region[2],
            address: address,
            defaultflag: isdefault == true ? 1 : 0
          },
          header: {
            "Content-Type":"application/x-www-form-urlencoded",
            "Authorization":getApp().globalData.Token
          },
          method: 'POST',
          success: function(res) {
            console.log("更新地址信息:");
            console.log(res);

            if (res.data.code == 0) {
              wx.showToast({
                title: '保存成功',
                mask: true,
                duration: 2000
              })
              setTimeout(function () {
                wx.navigateBack({
                  delta: 1
                })
              }, 2000)
            } else {
              wx.showToast({
                title: res.data.massage,
                icon: "none",
                duration: 2000,
                mask: true
              })
            }
          }
        })
        //结束标识符
      }
     //结束标识符
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