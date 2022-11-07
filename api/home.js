import {myRequest} from '../util/api.js'
export function getswiper(params){
	return myRequest({
		url:'/home/swiper',
		method:'GET',
		data:params
	})
}
export function getcakedata(params){
	return myRequest({
		url:'/home/cakedata',
		method:'GET',
		data:params
	})
}