// components/resultbtns/resultbtns.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    testIndex: {
      type: null,
      observer: function (newVal, oldVal) {
        this.setData({
          test_index: newVal
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    test_index:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 返回试题首页
    gotoTestIndex(e){
      var i = this.data.test_index
      var target = '/pages/testindex'+ i +'/testindex' + i
      wx.navigateTo({
        url: target
      })
    },
    // 跳转分享页面
    gotoShare(e) {
      wx.navigateTo({
        url: '/pages/testshare/testshare'
      })
    }
  }
})
