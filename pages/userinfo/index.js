// pages/userinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chktab:0,//tab选中

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //菜单的切换
  chktabopt:function(e){
    var that=this;
    //参数部分
    var id=e.currentTarget.dataset.id;
    that.setData({
      chktab:parseInt(id)
    })
  },
  //编辑操作
  goedit:function(e){
    //参数部分
    var id=e.currentTarget.dataset.id;
    var params = e.currentTarget.dataset.params;
    var chktab = this.data.chktab;

    wx.navigateTo({
      url: '../userinfo/edit?id=' + id + "&params=" + params + "&chktab=" + chktab
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