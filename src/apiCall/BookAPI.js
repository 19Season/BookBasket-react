import axios from 'axios';

export function getBooks(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/api/book/allbooks').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function getBooksByCategory(category){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/category/${category}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}
