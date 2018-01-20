//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    Plists: []
  },
  onLoad: function () {
    wx.getStorage({
      key: 'products',
      success: function (res) {
        this.setData({
          Plists: res.data
        })
        console.log(this.data.Plists)
      },
    })
  }
})
