var requesturl = getApp().globalData.requesturl; //接口的地址
let chooseYear = null; //选择的年份
let chooseMonth = null; //选择的月份

const conf = {
  data: {
    hasEmptyGrid: false, //空的个数
    signnum: 0, //连续签到的天数
  },
  //页面的初始化
  onLoad: function() {
    const date = new Date();
    const curYear = date.getFullYear();
    const curMonth = date.getMonth() + 1;
    const Today = date.getDate();
    const Year = date.getFullYear();
    const Month = date.getMonth() + 1;
    const weeksCh = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(curYear, curMonth); //计算空的格子
    this.calculateDays(curYear, curMonth); //计算天数
    this.setData({
      curYear,
      curMonth,
      Today: Today,
      Year: Year,
      Month: Month,
      weeksCh
    });
    //获取连续签到的天数
    this.getUserSignupContinuity();
  },
  //获取连续签到的天数
  getUserSignupContinuity: function() {
    var that = this;
    //请求获取连续签到的天数
    wx.request({
      url: requesturl + 'getUserSignupContinuity',
      data: '',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("连续签到的结果:");
        console.log(res);

        if (res.data.code == 0) {
          that.setData({
            signnum: res.data.resultObject
          })
        }
      }
    })
  },
  //得到月份的天数
  getThisMonthDays: function(year, month) {
    return new Date(year, month, 0).getDate();
  },
  //得到月份第一图
  getFirstDayOfWeek: function(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  //计算日期
  calculateEmptyGrids: function(year, month) {
    const firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    let empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },
  //计算天数
  calculateDays: function(year, month) {
    let days = [];
    var that = this;
    const thisMonthDays = that.getThisMonthDays(year, month);

    //请求得到一个月的签到的数据
    wx.request({
      url: requesturl + 'getSignupByRange',
      data: {
        dateTimeStart: year + "-" + month + "-" + "1",
        dateTimeEnd: year + "-" + month + "-" + thisMonthDays
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("一个月签到的结果:");
        console.log(res);

        if (res.data.code == 0) {
          //遍历
          for (let i = 1; i <= thisMonthDays; i++) {
            days.push({
              day: i,
              choosed: res.data.resultObject[i - 1].Issign
            });
          }

          that.setData({
            days: days
          });
        }
      }
    })

  },
  //排版日历
  handleCalendar: function(e) {
    const handle = e.currentTarget.dataset.handle;
    const curYear = this.data.curYear;
    const curMonth = this.data.curMonth;
    if (handle === 'prev') {
      let newMonth = curMonth - 1;
      let newYear = curYear;
      if (newMonth < 1) {
        newYear = curYear - 1;
        newMonth = 12;
      }
      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        curYear: newYear,
        curMonth: newMonth
      });
    } else {
      let newMonth = curMonth + 1;
      let newYear = curYear;
      if (newMonth > 12) {
        newYear = curYear + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        curYear: newYear,
        curMonth: newMonth
      });
    }
  },
  //分享
  onShareAppMessage: function() {

  },
  //立即签到
  signbtn: function() {
    var that = this;
    //签到数据
    wx.request({
      url: requesturl + 'userSignup',
      data: '',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": getApp().globalData.Token
      },
      method: 'POST',
      success: function(res) {
        console.log("签到的结果:");
        console.log(res);

        if (res.data.code == 0) {
          wx.showToast({
            title: '签到成功',
            duration: 2000,
            mask: true
          })
          that.onLoad();
        } else {
          wx.showModal({
            title: '提示',
            content: '签到失败!'+res.data.message,
            showCancel:false
          })
        }
      }
    })
  },
};

Page(conf);