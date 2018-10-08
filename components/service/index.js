// components/service/index.js
var globalimgurl=getApp().globalData.globalimgurl;//图片的地址
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          show_service: newVal,//是否显示弹窗
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    show_service: false,//是否显示
    serviceimg:  globalimgurl + "index/service_img.png",//图片
    starttime: "08:00",//开始时间
    endtime: "17:00",//结束时间
    phonenum: "020-928272",//电话号码
  },

  /**
   * 组件的方法列表
   */
  methods: { 
    //显示弹窗
    showwindow:function(){
      this.setData({
        show_service: true
      })
    },
    //拨打电话
    call_service:function(){
      var that = this;
      wx.makePhoneCall({
        phoneNumber: that.data.phonenum,
        complete: function (e) {
          console.log(e)
          that.setData({
            show_service: false
          })
          that.triggerEvent('showChange', 'false');
        }
      })
    },
  }
})
