App({
  onLaunch: function(options) {
    // Do something initial when launch.
    wx.request({
      url:'https://www.api.com/weipai/i/wp/pmall/test1',
      method:'GET',
      success:function(inResp){
        console.log(inResp);
      }
    })
  },
  onShow: function(options) {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    // Do something when error.
  },
  globalData: 'I am global data'
})
