// pages/consummateinfo/consummateinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 0,
    region: ['', '', ''],
    stu_name:"",   // 学生姓名
    stu_gender:1,  // 学生性别
    ischksex:-1,   //是否选择性别
    stu_birth:"",  // 学生出生年月
    stu_area:['','',''],   // 学生所在地区
    stu_group:"",  // 学生培训机构

    parent_name: '', // 家长姓名
    parent_tel:'', //  家长电话
    apply_date: '', //  报名日期
    apply_course: '' ,//  报名课程
    course_cost: 0, //  课程费用
    course_num: 23, //报名课程数
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //切换tab部分
  chktabopt:function(e){
    var that=this;
    //参数部分
    that.setData({
      show_nav:e.currentTarget.dataset.id
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

  },


  // 自定义事件

  // 选择学生性别
  radioChange(e){
    console.log(e.detail.value);
    this.setData({
      stu_gender:e.detail.value,
      ischksex: e.detail.value
    })
  },
  //  选择学生出生年月
  bindDateChange(e){
    var date = e.detail.value;
    this.setData({
      stu_birth: date.split('-')[0] + "年" + date.split('-')[1] + "月" + date.split('-')[2] + "日"
    })
  },
  // 选择学生地区
  bindRegionChange(e){
    this.setData({
      stu_area:e.detail.value
    })
    console.log(e.detail.value);
  },
  // 编辑学生姓名
  editStuName(e){
    this.setData({
      stu_name:e.detail.value
    })
  },
  // 编辑培训机构
  editStuGroup(e){
    this.setData({
      stu_group: e.detail.value
    })
  },

  // 跳转编辑家长信息
  nextStep(e){
    this.setData({
      show_nav: 1
    })
  },
   
  //家长报名日期
  bindBookDateChange:function(e){
    var date = e.detail.value;
    this.setData({
      apply_date: date.split('-')[0] + "年" + date.split('-')[1] + "月" + date.split('-')[2]+"日"
    })
  },
  // 跳转报名课程
  goBookClass(e){
    wx.navigateTo({
      url: '/pages/signupcourse/signupcourse'
    })
  },

  //跳转到首页
  goHomeopt:function(){
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },
})