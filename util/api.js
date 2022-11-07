const BASE_URL ="/api"

export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				const {
					data
				} = res
				if (res.statusCode === 200) {
					resolve(res)
					if (data.message) {
						uni.showToast({
							title: data.message,
							icon: "success"
						})
					}
				} else {
					if (data.message) {
						return uni.showToast({
							title: data.message,
							icon: "error"
						})
					} else {
						return uni.showToast({
							title: "获取数据失败",
							icon: "error"
						})
					}
				}
			},
			fail: (err) => {
				uni.showToast({
					title: '获取数据失败',
					icon: "error"
				})
				reject(err)
			}

		})
	})
}
