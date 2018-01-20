// pages/mine/mine.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    productName: '',
    productPrice: '',
    products: {}
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
  },
  submit: function () {
    let pName = this.data.productName
    pName = {
      name: this.data.productName,
      price: this.data.productPrice
    }
    let key = this.data.productName
    this.data.products[key] = pName
    console.log(this.data.products)
    // wx.setStorage(this.data.products)
    wx.showToast({
      icon:'success',
      title:'录入成功！'
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