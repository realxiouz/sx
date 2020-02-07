<template>
  <view class="content">
    <nav-bar />
    <button class="cu-btn bg-cyan block" @click="goSx">sx</button>
    <button @click="goTest" class="cu-btn block bg-yellow">test</button>
    <button @click="goTim" class="cu-btn block bg-blue">tim</button>
    <button @click="http" class="cu-btn bg-red block">http</button>
  </view>
</template>

<script>
export default {
  methods: {
    goSx() {
      uni.navigateTo({
        url: `/pages-sx/index/index`
      })
    },
    goTest() {
      uni.navigateTo({
        url: `/pages/test`
      })
    },
    goTim() {
      uni.navigateTo({
        url: `/pages-tim/index/index`
      })
    },
    http() {
      this.$http('register', {
        "mobile": "15912510617"
      }).then(r => {}).catch(e => {})
    }
  }
}
</script>