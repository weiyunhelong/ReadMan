// pages/userinfo/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,//编辑的类型
    params: "",//传递的参数值
    chktab:0,//来源 0->孩子，1：家长
    name:"",//姓名
    region:[],//
    date:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;

    //接受参数:""
    that.setData({
      id: options.id,//编辑的类型
      params: options.params,//传递的参数值
      chktab: options.chktab,//来源 0->孩子，1：家长
    })
    //页面展示的赋值
    that.initData();
  },
  //页面展示的赋值
  initData:function(){
    var that=this;
    //家长
    if (that.data.chktab==1){
      if (that.data.id==1){
         wx.setNavigationBarTitle({
           title: '修改姓名',
         })
       } 
    }else{//孩子部分
      if (that.data.id == 2) {
        wx.setNavigationBarTitle({
          title: '修改姓名',
        })
      } 
    }
  },
  //获取修改的姓名的值
  getusername:function(e){
    var that=this;
    //参数部分
    var txtval=e.detail.value;
    that.setData({
      params: txtval
    })
  },
  //保存操作
  saveopt:function(){
    var that=this;
    //参数部分
    var id=that.data.id,//编辑的类型
      params = that.data.params,//传递的参数值
      chktab = that.data.chktab;//来源 0->孩子，1：家长

    if (params==""){
      wx.showToast({
        title: '请输入姓名',
        icon:"none",
        duration:2000,
        mask:true
      })
    } else{
      wx.showToast({
        title: '保存成功',
        duration: 2000,
        mask: true
      })
      setTimeout(function(){
        wx.navigateBack({
          delta:1
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