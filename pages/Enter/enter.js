// pages/mine/mine.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://77fm5o.com1.z0.glb.clouddn.com/wp-content/thumbnails/43919.jpg?imageView2/1/w/250/h/140/q/86',
      'http://77fm5o.com1.z0.glb.clouddn.com/wp-content/thumbnails/43857.jpg?imageView2/1/w/250/h/140/q/86',
      'http://77fm5o.com1.z0.glb.clouddn.com/wp-content/thumbnails/43839.jpg?imageView2/1/w/250/h/140/q/86'
    ],
    productName: '',
    productPrice: 0,
    productNum: 0,
    products: app.globalData.products,
    total: 0
  },
  PnameInput: function (e) {
    this.setData({
      productName: e.detail.value
    })
  },
  PpriceInput: function (e) {
    this.setData({
      productPrice: e.detail.value
    })
    if (this.data.productNum) {
      this.setData({
        total: Number(this.data.productNum) * Number(this.data.productPrice)
      })
    }
  },
  PnumInput: function (e) {
    this.setData({
      productNum: e.detail.value
    })
    if (this.data.productPrice) {
      this.setData({
        total: Number(this.data.productNum) * Number(this.data.productPrice)
      })
    }
  },
  submit: function () {
    let Data = {
      src: 'http://77fm5o.com1.z0.glb.clouddn.com/wp-content/thumbnails/44097.jpg?imageView2/1/w/250/h/140/q/86',
      name: this.data.productName,
      price: this.data.productPrice,
      num: this.data.productNum,
      total: this.data.total
    }
    this.data.products.push(Data)
    wx.setStorage({
      key: 'products',
      data: this.data.products,
      success: function (res) {
        wx.showToast({
          icon: 'success',
          title: '录入成功！'
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '录入失败！'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})