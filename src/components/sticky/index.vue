<template>
  <view
    class="sticky-wrap"
    :style="{top}"
  >
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    top: {
      type: String,
      default: '0px'
    }
  }
}
</script>

<style>
.sticky-wrap{
  position: sticky;
}
</style>