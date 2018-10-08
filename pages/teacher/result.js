// pages/teacher/result.js
var requesturl = getApp().globalData.requesturl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    numval: "",
    teacherobj: {
      name: "",
      numval: "",
      imgpath: ""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log("接受参数值:");
    console.log(options);
    //接受参数
    that.setData({
      name: options.name,
      numval: options.numval,
    })
    //获取查询的结果
    that.getResult();
  },
  //获取查询的结果
  getResult: function() {
    var that = this;
    //参数部分
    var name = that.data.name,
      numval = that.data.numval;

    //请求接口获取到数据
    wx.request({
      url: requesturl + 'getTeacherCertificateList',
      data: {
        Authorization: getApp().globalData.Token,
        name: name,
        code: numval
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token,
      },
      method: 'POST',
      success: function(res) {
        console.log("获取老师的结果:");
        console.log(res);

        //教师信息
        if(res.data.code==0){
          var teacherobj = {
            name: res.data.resultObject.title,
            numval: res.data.resultObject.code,
            imgpath: res.data.resultObject.image
          };
          that.setData({
            teacherobj: teacherobj
          })
        }else{
          wx.showToast({
            title: res.data.message,
            icon:"none",
            duration:2000,
            mask:true
          })
        }
        //结束标识符
      }
    })
    //结束标识符 
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