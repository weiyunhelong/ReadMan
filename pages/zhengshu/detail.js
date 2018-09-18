// pages/zhengshu/detail.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhengshulist:[],//证书数据
    zhengshuobj:{},//证书的详情
    chkindex:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取证书
    that.getZhengshu(); 
  },
  //获取证书
  getZhengshu:function(){
    var that=this;
    //获取值部分
    var zhengshulist=[
      {
        id:1,
        logopath: globalimgurl+"zhengshuqiang/topimg.png",
        classname:"课程名称X",
        username:"王嘉尔",
        groupname:"补习机构A",
        zhangpath:"/resources/certificate/zhang.jpg",
      },
      {
        id: 2,
        logopath: globalimgurl + "zhengshuqiang/topimg.png",
        classname: "课程名称XX",
        username: "王嘉尔",
        groupname: "补习机构B",
        zhangpath: "/resources/certificate/zhang.jpg",
      },
      {
        id: 3,
        logopath: globalimgurl + "zhengshuqiang/topimg.png",
        classname: "课程名称XXX",
        username: "王嘉尔",
        groupname: "补习机构A",
        zhangpath: "/resources/certificate/zhang.jpg",
      },
      {
        id: 4,
        logopath: globalimgurl + "zhengshuqiang/topimg.png",
        classname: "课程名称XXXX",
        username: "王嘉尔",
        groupname: "补习机构A",
        zhangpath: "/resources/certificate/zhang.jpg",
      }
    ];//证书数据

    that.setData({
      zhengshulist: zhengshulist,//证书数据
      zhengshuobj: zhengshulist[0]
    }) 
  }, 
  //点击切换证书
  gochkidnex:function(e){
    var that=this;
    //参数部分
    var index=e.currentTarget.dataset.index;
    var zhengshulist =that.data.zhengshulist;
    that.setData({
      zhengshuobj: zhengshulist[index],
      chkindex:index
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