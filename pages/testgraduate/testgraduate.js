// pages/testgraduate/testgraduate.js
var globalimgurl = getApp().globalData.globalimgurl;//图片地址
var requesturl = getApp().globalData.requesturl;//接口地址
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topimg: "",//顶部的图片
    testid:5,//测试id
    datalist:[],//题目的列表数据
    sumtimu:12,//题目总数
    currnum:1,//当前题目数
    title:"你的休闲时间大部分是如何度过的？",//题目内容
    options:[],
    chkoption:-1,//选中的选项
    showtype:1,//题目的类型
    ischange:false,//是否替换
    answer:[],//自己的答案,以逗号分隔
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    that.setData({
      topimg: globalimgurl + "testing/testlist1_img.png"
    })
    //接受参数
    /*
    that.setData({
      testid: parseInt(options.id) 
    })
    */
  },
   //选项的勾选
  radioChange:function(e){
    var that=this;
    var currnum = that.data.currnum;
    var answer=that.data.answer;
   
    var newanswer = answer;
    if (that.data.ischange){//更换
      newanswer = newanswer.splice(--currnum, 1, e.currentTarget.dataset.id);
    }else{//新增
      newanswer[--currnum] = e.currentTarget.dataset.id;
    }
    that.setData({
      chkoption: e.currentTarget.dataset.id,
      answer: newanswer 
    })
  },
  //问答的答案
  gettxtval:function(e){
    var that = this;
    that.setData({
      txtval: e.detail.value
    })
  },
  //下一题
  gotoNextSubject:function(){
    var that=this;
    if (that.data.chkoption==-1){
      wx.showToast({
        title: '请选择选项',
        mask:true,
        duration:2000,
        icon:'none'
      })
    }else{
      that.setData({
        currnum: that.data.currnum + 1
      })
      //初始化题目
      that.InitTest(0);
    }
  },
  //上一题
  gotoPreSubject:function(){
    var that=this;
    that.setData({
      currnum: that.data.currnum - 1,
      ischange:true
    })
    //初始化题目
    that.InitTest(1);
  },
  //初始化题目
  InitTest:function(num){
    var that=this;
    //题目的列表
    var datalist = that.data.datalist;//题目列表
    var currnum = that.data.currnum;//当前的题目数
  
    var tiobj={};
    //循环找到对应的题目
    for(var i=0;i<datalist.length;i++){
      if(datalist[i].no==currnum){
        tiobj={
          title: datalist[i].question,//答题的题目
          showtype:1,//答题的形式
          options: [//答题的选项
            {
              index:1,
              optiontxt: datalist[i].option1,
              optionval: "A"
            },
            {
              index: 2,
              optiontxt: datalist[i].option2,
              optionval: "B"
            },
            {
              index: 3,
              optiontxt: datalist[i].option3,
              optionval: "C"
            },
            {
              index: 4,
              optiontxt: datalist[i].option4,
              optionval: "D"
            },
            {
              index: 5,
              optiontxt: datalist[i].option5,
              optionval: "E"
            },
            {
              index: 6,
              optiontxt: datalist[i].option6,
              optionval: "F"
            },
            {
              index: 7,
              optiontxt: datalist[i].option7,
              optionval: "G"
            },
            {
              index: 8,
              optiontxt: datalist[i].option8,
              optionval: "H"
            }
          ]
        };
      }
    }
    //赋值部分
    var answer = that.data.answer;//已选答案
    console.log("已选答案的内容:");
    console.log(answer);
    var chkoption = answer[--currnum] ==undefined ? -1 : answer[--currnum];
    that.setData({
      title:tiobj.title,
      options: tiobj.options,
      showtype: tiobj.showtype,
      chkoption: chkoption,//选中的选项
      ischange: false,//是否修改题目
    })
  },
  //提交题目
  goto_result:function(){
    var that=this;
    //数据的整理
    var answertxt='';
    for (var i = 0; i < that.data.answer.length;i++){
      answertxt += that.data.answer[i]+",";
    }
    //提交数据
    wx.request({
      url: requesturl +'submitTest',
      data: {
        testid: that.data.testid,
        answers: answertxt
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("提交的结果:");
        console.log(res);
        
        if(res.data.code==0){
          that.InitResult();
        }else{
          wx.showToast({
            title: '提交失败！',
            mask:true,
            duration:2000,
            icon:"none"
          })
        }
        
      }
    })
    //结束标识符
  },
  //获取提交的结果
  InitResult:function(){
    var that=this;
    //请求接口获取数据
    wx.request({
      url: requesturl +'getTestResult',
      data: {
        testid:that.data.testid
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取答题的结果:");
        console.log(res);
        if(res.data.resultObject.score>=80){
          wx.navigateTo({
            url: '../graduatesuccess/graduatesuccess?id='+that.data.testid
          })
        }else{
          wx.navigateTo({
            url: '../graduatefail/graduatefail?id=' + that.data.testid
          })
        }
      }
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
    //获取题目数据
    wx.request({
      url: requesturl +'getTestQuestionList',
      data: {
        testid:that.data.testid
      },
      header: {
        "Content-Type":"application/x-www-form-urlencoded",
        "Authorization":getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("获取测试的题目:");
        console.log(res);
        //赋值部分
        if(res.data.code==0){
          that.setData({
            sumtimu: res.data.resultObject.length,
            datalist: res.data.resultObject
          })
          //初始化题目
          that.InitTest(0);
        }else{
          console.log("获取列表数据失败!" + res.data.message);
        }
        //结束标识符
      }
    })
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
})