import axios from 'axios';

export function getBooks(){
	return new Promise(function (resolve,reject) {
		axios.get('http://localhost:8085/api/book/allbooks').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function getBookById(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}


export function getUserBook(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/user/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function approveBooks(id){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/approve/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function deleteBook(id){
	return new Promise(function (resolve,reject) {
		axios.delete(`http://localhost:8085/api/book/delete/${id}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}


export function getBooksByCategory(category){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/category/${category}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function getBooksByAuthor(author){
	return new Promise(function (resolve,reject) {
		axios.get(`http://localhost:8085/api/book/author/${author}`).then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}

export function addBook(title,author,price,category,description,type,addedBy) {
	var data = {
		"title":title,
		"author":author,
		"price":price,
		"category":category,
		"type":type,
		"description":description,
		"addedBy":{"id":addedBy}
	}
	return new Promise(function (resolve, reject){
		axios.post('http://localhost:8085/api/book/add', data).then(function(res){
			console.log("getting response .....");
			console.log(res)
			resolve(res.data)
		}).catch(function(err){
			console.log("error")
			console.log(err)
			reject(err)
		});
	})
}