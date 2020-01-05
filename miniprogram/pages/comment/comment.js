// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    content:'',
    score:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    wx.showLoading({
      title: '加载中...',
    })
    wx.cloud.callFunction({
      name: 'getDetail',
      data: {
        movieid: options.movieid
      }
    }).then(res => {
      console.log(res);
      this.setData({
        detail: JSON.parse(res.result)
      });
      wx.hideLoading();
    }).catch(error => {
      console.error(error);
      wx.hideLoading();
    });
  },
  submit:function(){

    console.log(this.data.content);
  },
  onContentChange: function (event) {
    this.setData({
      content: event.detail //detail为内容
    })
  },
  onScoreChange: function () {


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

  }
})