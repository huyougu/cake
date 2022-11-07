import {myRequest} from '../util/api.js'
export function addcart(params){
	return myRequest({
		url:`/cart/addcart`,
		method:'PUT',
		data:params
	})
}
export function getcart(params){
	return myRequest({
		url:`/cart/getcart`,
		method:'GET',
		data:params
	})
}
export function delcart(params){
	return myRequest({
		url:`/cart/delcart`,
		method:'DELETE',
		data:params
	})
}