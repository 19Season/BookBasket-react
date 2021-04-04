import axios from 'axios';

export function getUsers(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/api/user/allusers').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}