// pages/classtest/classtest.js
var globalimgurl = getApp().globalData.globalimgurl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_item_id: 4,
    clubs: [{
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
      {
        image: globalimgurl + 'classtest/classtest_img.png',
        name: "aa"
      },
    ],
    topimg: globalimgurl + "classtest/classtest_img.png",
    classlist: [{
        id: 1,
        image: globalimgurl + "classtest/tiger_1.png",
        title: "1、学会管理时间",
        context: "测一测，你是否是一个“时间专家”？",
      },
      {
        id: 2,
        image: globalimgurl + "classtest/tiger_2.png",
        title: "2、学会战胜压力",
        context: "测一测，你是那种压力类型的人？",
      },
      {
        id: 3,
        image: globalimgurl + "classtest/tiger_3.png",
        title: "3、让你增强自信心",
        context: "测一测，你有多自信？",
      },
      {
        id: 4,
        image: globalimgurl + "classtest/tiger_1.png",
        title: "4、成为运算高手",
        context: "入门测试",
      },
      {
        id: 5,
        image: globalimgurl + "classtest/tiger_2.png",
        title: "5、成为说服他人得专家",
        context: "测一测，我已经是一名“具有说服力得专家” 了吗？",
      },
      {
        id: 6,
        image: globalimgurl + "classtest/tiger_3.png",
        title: "666",
        context: "66666，你已经成为一名“具有说服 力的专家”了吗？",
      },
      {
        id: 7,
        image: globalimgurl + "classtest/tiger_1.png",
        title: "7、学会与异性正确交往",
        context: "测一测，在与异性的交流中，你是哪种类型？",
      },
      {
        id: 8,
        image: globalimgurl + "classtest/tiger_2.png",
        title: "8、健康小测试",
        context: "通过这个健康小测试能让你对自己的健康状况有一个初步的了解。请回答下列问题，选择最接近自己的选项。",
      },
      {
        id: 9,
        image: globalimgurl + "classtest/tiger_3.png",
        title: "9、快速提高口头表达能力",
        context: "口头发言测试",
      },
    ], //课程列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.classlist)
    var list = this.data.classlist;
    var color_list = ['#8957A1', '#12BCF8', '#FFE933', '#FF4747', '#B3D465'];
    //  遍历加入图片背景色
    list.forEach(function (el, index) {
      el.bg_color = color_list[index % 5];
    })
    console.log(list)
    this.setData({
      classlist: list
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

  // 跳转到测试题
  goto_testindex(e) {
    wx.navigateTo({
      url: '/pages/testindex' + e.currentTarget.dataset.id + '/testindex' + e.currentTarget.dataset.id
    })
  },

  //触摸开始事件
  touchstart: function (e) {
    // console.log(e.touches[0].pageY);
    this.data.touchDot = e.touches[0].pageY;
    var that = this;
    this.data.interval = setInterval(function () {
      that.data.time += 1;
    }, 100);
  },
  //触摸移动事件
  touchmove: function (e) {
    let touchMove = e.touches[0].pageY;
    let touchDot = this.data.touchDot;
    let time = this.data.time;
    // console.log("touchMove: " + touchMove + ", touchDot: " + touchDot + ", diff: " + (touchMove - touchDot));
    //向左滑动
    if (touchMove - touchDot <= -40 && time < 10 && !this.data.done) {
      console.log("向上滑动");
      this.data.done = true;
      this.scrollTop();
    }
    //向右滑动
    if (touchMove - touchDot >= 40 && time < 10 && !this.data.done) {
      console.log("向下滑动");
      this.data.done = true;
      this.scrollBottom();
    }
  },
  //触摸结束事件
  touchend: function (e) {
    clearInterval(this.data.interval);
    this.data.time = 0;
    this.data.done = false;
  },
  // rpx转换成px，animation用
  rpx2px(rpx){
    var systemInfo = wx.getSystemInfoSync();
    var res = rpx / 750 * systemInfo.windowWidth
    return res;
  },
  //向左滑动事件
  scrollTop() {
    var that = this;
    var animation1 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation3 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation4 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation5 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation6 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation7 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation8 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })
    var animation9 = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0
    })

    console.log('top')

    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation4 = animation4;
    this.animation5 = animation5;
    this.animation6 = animation6;
    this.animation7 = animation7;
    this.animation8 = animation8;
    this.animation9 = animation9;

    animation1.translateY(-1 * that.rpx2px(240)).opacity(0).step();
    animation2.translateY(-1 * that.rpx2px(-240)).opacity(0).scale(1, 1).step();
    animation3.translateY(-1 * that.rpx2px(-180)).opacity(0).scale(1, 1).step();
    animation4.translateY(-1 * that.rpx2px(-120)).opacity(0.6).scale(0.85, 0.85).step();
    animation5.translateY(-1 * that.rpx2px(-60)).opacity(0.9).scale(0.9, 0.9).step();
    animation6.translateY(-1 * that.rpx2px(0)).opacity(1).scale(1, 1).step();
    animation7.translateY(-1 * that.rpx2px(60)).opacity(0.9).scale(0.9, 0.9).step();
    animation8.translateY(-1 * that.rpx2px(120)).opacity(0.6).scale(0.85, 0.85).step();
    animation9.translateY(-1 * that.rpx2px(180)).opacity(0).scale(1, 1).step();


    this.setData({
      animation1: animation1.export(),
      animation2: animation2.export(),
      animation3: animation3.export(),
      animation4: animation4.export(),
      animation5: animation5.export(),
      animation6: animation6.export(),
      animation7: animation7.export(),
      animation8: animation8.export(),
      animation9: animation9.export()
    })

    var animationlist = [
      animation1.export(),
      animation2.export(),
      animation3.export(),
      animation4.export(),
      animation5.export(),
      animation6.export(),
      animation7.export(),
      animation8.export(),
      animation9.export()
    ]

    // var list = this.data.classlist
    // list.forEach(function (el, index) {
    //   var target = 'classlist[' + index + '].animation'
    //   el.animation = animationlist[index]
    //   that.setData({
    //     [target]: animationlist[index]
    //   })
    // })

    console.log(this.data.classlist)


    // setTimeout(function () {
    //   that.animation1.translateY(-50).opacity(0.2).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation2.translateY(-1 * that.rpx2px(400)).opacity(0).scale(0.9, 0.9).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation3.translateY(-1 * that.rpx2px(300)).opacity(0).scale(1, 1).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation4.translateY(-1 * that.rpx2px(200)).opacity(0.6).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation5.translateY(-1 * that.rpx2px(100)).opacity(0.85).scale(0.9, 0.9).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation6.translateY(-1 * that.rpx2px(100)).opacity(1).scale(1, 1).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation7.translateY(-1 * that.rpx2px(100)).opacity(0.2).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation8.translateY(50).opacity(0.2).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation9.translateY(50).opacity(0.2).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.setData({
    //     animation1: animation1.export(),
    //     animation2: animation2.export(),
    //     animation3: animation3.export(),
    //     animation4: animation4.export(),
    //     animation5: animation5.export(),
    //     animation6: animation5.export(),
    //     animation7: animation5.export(),
    //     animation8: animation5.export(),
    //     animation9: animation5.export()
    //   })
    // }.bind(this), 195)

    let array = this.data.classlist;
    let shift = array.shift();
    array.push(shift);

    setTimeout(function () {
      this.setData({
        classlist: array
      })
    }.bind(this), 195)
  },

  //向下滑动事件
  scrollBottom() {
    var that = this;
    var animation1 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation2 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation3 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation4 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation5 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation6 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation7 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation8 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    var animation9 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })

    this.animation1 = animation1;
    this.animation2 = animation2;
    this.animation3 = animation3;
    this.animation4 = animation4;
    this.animation5 = animation5;
    this.animation6 = animation6;
    this.animation7 = animation7;
    this.animation8 = animation8;
    this.animation9 = animation9;

    animation1.translateY(that.rpx2px(-180)).opacity(0).scale(0, 0).step();
    animation2.translateY(that.rpx2px(-120)).opacity(0.6).scale(0.85, 0.85).step();
    animation3.translateY(that.rpx2px(-60)).opacity(0.9).scale(0.9, 0.9).step();
    animation4.translateY(that.rpx2px(0)).opacity(1).scale(1, 1).step();
    animation5.translateY(that.rpx2px(60)).opacity(0.9).scale(0.9, 0.9).step();
    animation6.translateY(that.rpx2px(120)).opacity(0.6).scale(0.85, 0.85).step();
    animation7.translateY(that.rpx2px(180)).opacity(0).step();
    animation8.translateY(that.rpx2px(240)).opacity(0).step();
    animation9.translateY(that.rpx2px(-240)).opacity(0).step();


    this.setData({
      animation1: animation1.export(),
      animation2: animation2.export(),
      animation3: animation3.export(),
      animation4: animation4.export(),
      animation5: animation5.export(),
      animation6: animation5.export(),
      animation7: animation5.export(),
      animation8: animation5.export(),
      animation9: animation5.export()
    })

    var animationlist = [
      animation1.export(),
      animation2.export(),
      animation3.export(),
      animation4.export(),
      animation5.export(),
      animation6.export(),
      animation7.export(),
      animation8.export(),
      animation9.export()
    ]

    // var list = this.data.classlist
    // list.forEach(function (el, index) {
    //   var target = 'classlist[' + index + '].animation'
    //   el.animation = animationlist[index]
    //   that.setData({
    //     [target]: animationlist[index]
    //   })
    // })

    // this.setData({
    //   classlist: list
    // })

    // var that = this;
    // setTimeout(function () {
    //   that.animation1.translateY(-25).opacity(0.6).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation2.translateY(-20).opacity(0.9).scale(0.9, 0.9).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation3.translateY(0).opacity(1).scale(1, 1).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation4.translateY(20).opacity(0.9).scale(0.9, 0.9).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation5.translateY(25).opacity(0.6).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation6.translateY(25).opacity(0.6).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation7.translateY(25).opacity(0.6).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation8.translateY(25).opacity(0.6).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.animation9.translateY(25).opacity(0.6).scale(0.85, 0.85).step({
    //     duration: 0,
    //     timingFunction: 'linear'
    //   });
    //   that.setData({
    //     animation1: animation1.export(),
    //     animation2: animation2.export(),
    //     animation3: animation3.export(),
    //     animation4: animation4.export(),
    //     animation5: animation5.export(),
    //     animation6: animation6.export(),
    //     animation7: animation7.export(),
    //     animation8: animation8.export(),
    //     animation9: animation9.export()
    //   })
    // }.bind(this), 195)

    let array = this.data.classlist;
    let pop = array.pop();
    array.unshift(pop);

    setTimeout(function () {
      that.setData({
        classlist: array
      })
      console.log(that.data.classlist)
    }.bind(this), 195)
  },

  changeSwiper(e) {
    console.log(e.detail.current)
    this.setData({
      current_item_id: e.detail.current
    })
  }
})