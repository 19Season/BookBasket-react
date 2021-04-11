import axios from 'axios';

export function getUsers(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/api/user/alluser').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function countUsers(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/user/count').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

