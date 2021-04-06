import axios from 'axios';

export function getOrders(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/api/order/allorder').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function getParticularUserOrder(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/order/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

