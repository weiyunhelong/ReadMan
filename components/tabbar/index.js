// components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    receiveData: {
      type: null,
      observer: function(newVal, oldVal) {
        this.setData({
          chktab: newVal
        })
      }
    }
  },
  //页面的初始化
  attached:function(){
     //获取参数
     var that=this;

     that.setData({
       isreddot: true
     })
  },
  /**
   * 组件的初始数据
   */
  data: {    
    menulist: [{
        id:0,
        iconUrl: "../../resources/tabbar/home.png",
        text: "首页",
        navTo: "../../pages/index/index"
      },
      {
        id: 1,
        iconUrl: "../../resources/tabbar/find.png",
        text: "发现",
        navTo: "../../pages/find/index"
      },
      {
        id: 2,
        iconUrl: "../../resources/tabbar/shop.png",
        text: "商城",
        navTo: "../../pages/mall/index"
      },
      {
        id: 3,
        iconUrl: "../../resources/tabbar/my.png",
        text: "个人中心",
        navTo: "../../pages/my/index"
      },
    ],
    chktab: 0, //默认第一个选中
    isreddot:false,//是否显示小红点
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //页面跳转
    navTo: function(e) {
      var that = this;
      var temp = e.target.dataset.oj;
      var index = e.target.dataset.index;
      if (that.data.chktab == index) return true;
      wx.redirectTo({
        url: temp.navTo
      })
    }
  }
})