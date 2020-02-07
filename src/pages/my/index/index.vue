<template>
  <view>
    <nav-bar></nav-bar>
    <view class="flex padding">
      <view class="">
        <image />
      </view>
      <view class="cu-btn" @click="handleLogin">
        去登陆
      </view>
    </view>
    <view>cards</view>
  </view>
</template>

<script>
export default {
  onShow() {
    
  },
  methods: {
    handleLogin() {
      uni.navigateTo({
        url: `/pages/my/login/index`
      })
    }
  }
}
</script>