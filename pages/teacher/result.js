// pages/teacher/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    numval:"",
    teacherobj:{
      name:"",
      numval:"",
      imgpath:""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
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
  getResult:function(){
     var that=this;
     //参数部分
    var name = that.data.name,
      numval = that.data.numval;

    var teacherobj= {
      name: name == "" ? "王老师" : name,
      numval: numval == "" ? "234325445" : numval,
      imgpath: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537020739072&di=b72dc9c7e5f9f2fdb873abc9b79441e6&imgtype=0&src=http%3A%2F%2F58pic.ooopic.com%2F58pic%2F13%2F91%2F13%2F98r58PICmdJ.jpg"
    };

    that.setData({
      teacherobj: teacherobj
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