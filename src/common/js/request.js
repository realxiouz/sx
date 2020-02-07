import { BASE_URL } from './const'

export const http = (url, data, method = 'post', showErrToast = true) => {
	// let token = uni.getStorageSync('apiToken') || ''
	let auth = {
		// SESS_ID: '58gqgtd2vuptutd49j35sbpneb',
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${BASE_URL}/${url}`,
			data: Object.assign({}, data, auth),
			method: method.toUpperCase(),
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(r => {
			let [err, data] = r
			if (err) {
				console.log('出错了...')
				reject(err)
				return
			}
			let status = data.statusCode
			switch (status) {
				case 401:
					reject(new Error('auth失败'));
					break;
				case 500:
					reject(new Error('500'))
					break;
				case 200:
          if (data.data.code === 0) {
            resolve(data.data)
          } else if (data.data.code > 0) {
						
						data.data.SESS_ID && uni.setStorageSync('sess_id', data.data.SESS_ID)
						reject(new Error(data.data.message))
						if (showErrToast) {
							uni.showToast({
								title: data.data.message,
								icon: 'none'
							})
						}
          }
					break
				default:
					resolve(data)
					break;
			}
		})
	})
}