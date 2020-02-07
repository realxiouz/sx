import Vue from 'vue'

Vue.prototype.$toast = (title = '操作成功') => {
	uni.showToast({
		title,
		icon: 'none'
	})
}

Vue.prototype.$log = console.log

Vue.prototype.$loading = (show = true) => {
  if (show) {
    uni.showLoading({
      title: '加载中...',
      mask: true
    })
  } else {
    uni.hideLoading()
  }
}

Vue.prototype.$getStorage = key => {
  return uni.getStorageSync(key)
}
Vue.prototype.$setStorage = (key, value) => {
  uni.setStorageSync(key, value)
}

Vue.prototype.$app = getApp()
