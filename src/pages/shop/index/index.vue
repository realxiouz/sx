<template>
  <view>
    <nav-bar>
    </nav-bar>
    <button open-type="getUserInfo" @getuserinfo="handleUserInfo">user_info</button>
    <button open-type="getUserInfo" @getuserinfo="handleUserInfoCloud">cloud</button>
    <button open-type="getUserInfo" @getuserinfo="handleGetAdmin">admin</button>
    <button open-type="getPhoneNumber" @bindgetphonenumber="handlePhone">getPhone</button>

  </view>
</template>
<script>
import { mapState } from 'vuex'

export default {
  onLoad(opt) {
    wx.login({
      success: r => {
        if (r.code) {
          this.$http('getSessionKey', {code: r.code}, 'get').then(r => {
            this.$log(r)
          })
        }
      }
    })
    this.db = wx.cloud.database({
      throwOnNotFound: false
    })

    // let app = getApp()
    // this.$log('app')
    this.$log(this.$app)
  },
  data() {
    return {
      fixed: false
    }
  },
  computed: {
    ...mapState('device', ['navBarHeight'])
  },
  methods: {
    handleUserInfo(res) {
      let { detail } = res
      this.$http('getUserInfo', {
        encryptedData: detail.encryptedData,
        iv: detail.iv
      }).then(r => {
        
      })
    },
    handleUserInfoCloud(res) {
      let { detail } = res
      if (detail.errMsg == 'getUserInfo:ok') {
        let users = this.db.collection('users')
        users.add({data: {
          ...detail.userInfo,
          createTime: this.db.serverDate()
        }}).then(res => {
          if (res._id) {
            this.$toast()
          }
        })
      } else {
        this.$toast('授权失败!')
      }
    },
    handleGetAdmin() {
      this.db.collection('users').doc('1').get()
      .then(r => {
        this.$log(r)
      })
      .catch(e => {
        this.$log(e)
        this.$loading()
        setTimeout(_ => {
          this.$loading(false)
        }, 4000)
      })
    },
    handlePhone(res) {
      let { detail } = res
      if (detail.errMsg == 'getUserInfo:ok') {
      }
    }
  }
  
}

</script>