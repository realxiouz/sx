<template>
  <view>
    <nav-bar />
    <view>
      <button
        style="width:90%;background-color: #DE2565;"
        open-type="getUserInfo"
        @getuserinfo="handleUserInfo"
      >授权用户信息</button>
    </view>
  </view>
</template>

<script>
export default {
  onLoad(opt) {
  },
  methods: {
    handleUserInfo(e) {
      if (e.detail.errMsg !== 'getUserInfo:ok') {
				uni.showModal({
					title: '获取用户信息失败',
					content: '错误原因' + e.detail.errMsg,
					showCancel: false
				})
				return
      }
      this.$http('mobile/api/Oauth/setUserInfo', {
        ...e.detail,
        SESS_ID: uni.getStorageSync('sess_id')
      })
        .then(r => {
        })
        .catch(err => {
        })
    }
  }
}
</script>