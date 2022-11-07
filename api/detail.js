import {myRequest} from '../util/api.js'
export function getdetail(id){
	return myRequest({
		url:`/details/getdetails?id=+${id}`,
		method:'GET'
	})
}