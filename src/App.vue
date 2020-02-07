<script>
import { mapActions } from 'vuex'
import Vue from 'vue'

export default {
	onLaunch: function(opt) {
		
		this.setDeviceInfo()
		wx.cloud.init()
		// wx.cloud.callFunction({
		// 	name: 'auth',
		// }).then(this.$log)

	},
	onShow: function() {
	},
	onHide: function() {
	},
	methods: {
		...mapActions('device', ['setDeviceInfo'])
	}
}
</script>

<style>
@import "../color-ui/main.css";
/* @import "../color-ui/icon.css"; */
page {
	min-height: 100%;
	display: flex;
}

</style>
