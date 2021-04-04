import React, { Component } from 'react';
import axios from 'axios';

export function getCountries(){
	return new Promise(function (resolve,reject) {
		axios.get('https://restcountries.eu/rest/v2/all').then((res)=>
			resolve(res)).catch((err)=>reject(err))
	})
}


export function addData(username,password,retryTimes) {
	console.log("add data .....");
    var data = {
        "username": username,
        "password": password,
    }
    return new Promise(function (resolve, reject){
    	axios.post('http://localhost:8085/api/user/login', data).then(function(res){
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
export function registerUser(username,password,fullname,contact,email,retryTimes) {
        console.log("add data .....");
        var data = {
            "username": username,
            "password": password,
            "fullname":fullname,
            "contact":contact,
            "email":email
        }
        return new Promise(function (resolve, reject){
            axios.post('http://localhost:8085/api/user/adduser', data).then(function(res){
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



   /* return new Promise(function (resolve, reject) {
        axios({
            method: 'POST',
            url: 'http://localhost:8085/api/user/login',
            headers: {},
            data: data
        }).then((res, err) => {
            if (res) {
            	console.log("res.....")
            	console.log(res)
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) { 
        	reject(err)
            if (retryTimes === 1) {
            		console.log(err)

                reject(err);
            } else {
                setTimeout(() => {
                    addData(retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });*/



