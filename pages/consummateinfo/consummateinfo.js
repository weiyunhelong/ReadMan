// pages/consummateinfo/consummateinfo.js
var requesturl = getApp().globalData.requesturl; //请求接口的地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_nav: 0,
    region: ['', '', ''],
    stu_name: "", // 学生姓名
    stu_gender: 1, // 学生性别
    ischksex: -1, //是否选择性别
    stu_birth: "", // 学生出生年月
    stu_area: ['', '', ''], // 学生所在地区
    stu_group: "", // 学生培训机构

    parent_name: '', // 家长姓名
    parent_tel: '', //  家长电话
    apply_date: '', //  报名日期
    apply_course: '', //  报名课程
    course_cost: 0, //  课程费用
    course_num: 23, //报名课程数
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  //切换tab部分
  chktabopt: function(e) {
    var that = this;
    //参数部分
    that.setData({
      show_nav: e.currentTarget.dataset.id
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
    var that = this;
    //获取用户报名的信息
    that.InitData();
  },
  //获取用户报名的信息
  InitData: function() {
    var that = this;
    //请求接口，获取数据
    wx.request({
      url: requesturl + 'getWeuserByToken',
      data: '',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("用户的完善信息:");
        console.log(res);
        if (res.data.code == 0) {
          that.setData({
            apply_date: res.data.resultObject.signupDate,
            course_num: res.data.resultObject.courseCount,
          })
          //报名的课程
          wx.setStorage({
            key: 'bookclasslist',
            data: res.data.resultObject.courselist
          })
        } else {
          console.log("获取完善信息失败！");   
        }
      }
    })
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

  },


  // 自定义事件

  // 编辑学生姓名
  editStuName(e) {
    this.setData({
      stu_name: e.detail.value
    })
  },
  // 选择学生性别
  radioChange(e) {
    console.log(e.detail.value);
    this.setData({
      stu_gender: e.detail.value,
      ischksex: e.detail.value
    })
  },
  //  选择学生出生年月
  bindDateChange(e) {
    var date = e.detail.value;
    this.setData({
      stu_birth: date.split('-')[0] + "年" + date.split('-')[1] + "月" + date.split('-')[2] + "日"
    })
  },
  // 选择学生地区
  bindRegionChange(e) {
    this.setData({
      stu_area: e.detail.value
    })
    console.log(e.detail.value);
  },
  // 编辑培训机构
  editStuGroup(e) {
    this.setData({
      stu_group: e.detail.value
    })
  },

  // 跳转编辑家长信息
  nextStep(e) {
    var that = this;
    if (that.data.stu_name == "") {
      that.AlertMsg('请输入姓名', 1);
    } else if (that.data.ischksex == -1) {
      that.AlertMsg('请选择性别', 1);
    } else if (that.data.stu_birth == "") {
      that.AlertMsg('请选择出生年月', 1);
    } else if (that.data.stu_area[0] == "") {
      that.AlertMsg('请选择地区', 1);
    } else {
      that.setData({
        show_nav: 1
      })
    }
  },
  //家长的姓名
  editParentName: function(e) {
    this.setData({
      parent_name: e.detail.value
    })
  },
  //家长的手机号
  editParentTel: function(e) {
    this.setData({
      parent_tel: e.detail.value
    })
  },
  //家长报名日期
  bindBookDateChange: function(e) {
    var date = e.detail.value;
    this.setData({
      apply_date: date.split('-')[0] + "年" + date.split('-')[1] + "月" + date.split('-')[2] + "日"
    })
  },

  // 跳转报名课程
  goBookClass: function(e) {
    wx.navigateTo({
      url: '../signupcourse/signupcourse'
    })
  },
  //报名的费用
  coursecostopt: function(e) {
    this.setData({
      course_cost: e.detail.value
    })
  },
  //跳转到首页
  goHomeopt: function() {
    var that = this;
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/;

    //验证必填项目
    if (that.data.stu_name == "") {
      that.AlertMsg('请输入孩子姓名', 1);
    } else if (that.data.ischksex == -1) {
      that.AlertMsg('请选择孩子性别', 1);
    } else if (that.data.stu_birth == "") {
      that.AlertMsg('请选择孩子生日', 1);
    } else if (that.data.stu_area[0] == "") {
      that.AlertMsg('请选择孩子地区', 1);
    } else if (that.data.parent_name == "") {
      that.AlertMsg('请输入家长姓名', 1);
    } else if (that.data.parent_tel == "") {
      that.AlertMsg('请输入家长手机号码', 1);
    } else if (!reg.test(that.data.parent_tel)) {
      that.AlertMsg('家长手机号码错误', 1);
    } else {
      //请求接口，提交数据
      wx.request({
        url: requesturl + 'saveWeuserInfo',
        data: {
          name: decodeURIComponent(that.data.stu_name),
          sex: that.data.ischksex == 1 ? 1 : 2,
          birthday: that.data.stu_birth,
          provice: decodeURIComponent(that.data.stu_area[0]),
          city: decodeURIComponent(that.data.stu_area[1]),
          area: decodeURIComponent(that.data.stu_area[2]),
          parentname: decodeURIComponent(that.data.parent_name),
          parentphone: that.data.parent_tel
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": getApp().globalData.Token
        },
        method: 'POST',
        success: function(res) {
          console.log("完善用户信息:");
          console.log(res);

          if (res.data.code == 0) {
            //跳转到主页
            wx.redirectTo({
              url: '../index/index'
            })
          } else {
            that.AlertMsg(res.data.message, 1);
          }
        }
      })
      //结束标识符
    }
    //结束标识符
  },
  //弹窗提示信息
  AlertMsg: function(msg, typeval) {
    if (typeval == 1) {
      wx.showToast({
        title: msg,
        duration: 2000,
        mask: true,
        icon: "none"
      })
    } else {
      wx.showToast({
        title: msg,
        duration: 2000,
        mask: true,
      })
    }
  },
})