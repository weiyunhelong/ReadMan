// pages/refund/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodslist: [{
      id: 1,
      imgpath: "http://pic.58pic.com/58pic/13/32/23/75H58PICKmx_1024.jpg",
      title: "高级文具盒标题名称不超过两排+女生最爱文具系列高级文具盒标题名称不超过两排+女生最爱文具系列",
      color: "粉红色",
      jifen: 10,
      buynum: 1
    }],
    chkbtn: 1, //选择方式
    jifen: 12, //积分
    buynum: 3, //退款个数
    imglist: [], //上传的图片列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //选择操作按钮
  chktypeopt: function(e) {
    var that = this;
    //参数部分
    var id = e.currentTarget.dataset.id;
    that.setData({
      chkbtn: id
    })
  },
  //点击减号
  reduceopt: function() {
    var that = this;

    var buynum = that.data.buynum;
    buynum = buynum - 1 > 0 ? buynum - 1 : 1;
    var jifen = buynum * 4;

    that.setData({
      buynum: buynum,
      jifen: jifen
    })
  },
  //点击加号
  addopt: function() {
    var that = this;

    var buynum = that.data.buynum;
    buynum = buynum + 1;
    var jifen = buynum * 4;

    that.setData({
      buynum: buynum,
      jifen: jifen
    })
  },
  //获取退货原因
  getreason: function(e) {
    var that = this;

    that.setData({
      reason: e.detail.value
    })
  },
  //选择图片
  chooseimgopt: function() {
    var that = this;
    
    var imglist = that.data.imglist;
    
    var imgnum = imglist.length;

    if (imgnum==5){
       wx.showToast({
         title: '最多上传5张图',
         mask:true,
         duration:2000,
         icon:'none'
       })
    }else{
    //选取图片上传
    wx.chooseImage({
      count: 5 - imgnum, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        wx.showLoading({
          title: '正在上传',
          mask: true
        });


        //赋值部分
        var shoutu = tempFilePaths;
        imglist = imglist.concat(shoutu);
        that.setData({
          imglist: imglist
        })

        wx.hideLoading();

      }
      //选取图片上传结束
      })

    }
  },
  //替换图片
  changeimgopt:function(e){
    var that=this;
    //参数部分
    var index = e.currentTarget.dataset.index;
    index = parseInt(index);

    //选取图片上传
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;

        wx.showLoading({
          title: '正在上传中...',
        })
        var tupath = tempFilePaths[0];
        //替换上传的图片
        //参数部分
        var imglist = that.data.imglist;
        imglist.splice(index, 1, tupath);
        that.setData({
          imglist: imglist
        })
        wx.hideLoading();
      }
    })
  },
  //申请退款操作
  refundopt:function(){
    var that=this;

    var reason = that.data.reason;
    var imglist = that.data.imglist;
    var buynum = that.data.buynum;
    var jifen=that.data.jifen;
    var chkbtn = that.data.chkbtn;

    wx.navigateTo({
      url: '../refund/result',
    })
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