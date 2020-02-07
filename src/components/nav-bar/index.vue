<template>
  <view 
    :style="{
      height: `${navBarHeight}px`,
      width: '100vw',
    }">
    <view
      :style="{
        height: `${navBarHeight}px`,
        padding: `${navBarPadding}`,
        background: '#976C1E'
      }"
      class="nav-bar">
      <slot name="default">
        
      </slot>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('device', ['navBarPadding', 'navBarHeight', 'statusBarHeight']),
  },
}
</script>

<style>
.nav-bar{
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
}
</style>