import React, { Component } from 'react';
import './login.css';
import {addData} from '../../apiCall/Login.js';

export class Login extends Component {
	 constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}

	handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit=(event)=>{
		event.preventDefault();
		var date=Date.now()
		addData(this.state.username,this.state.password,3).then((res)=>{
			localStorage.setItem("expiry_time",JSON.stringify(date+8640000));
			localStorage.setItem("userinfo",JSON.stringify(res));
			window.location.href='/userdash';
			console.log(res);
			console.log(localStorage.getItem('userInfo'));	
		}).catch((err)=>{
			if(err.response.status===404){
				this.setState({username:'',password:''});
			}
		}
		)
	}
	


    render() {
        return (
            <div>
			<div class="login">
			<h1 align="center">Login</h1>
		<p align="center" class="pheader">Enter login details to get access</p>
		<form onSubmit={(event)=>this.handleSubmit(event)} >
			<p class="pinput">
			Username
			<input type="text" name="username" class="inputData" placeholder="username / email address" 
			onChange={(e)=>this.handleChange(e)} />
			</p>
			<p class="pinput">
			Password
			<input type="password" name="password" class="inputData" placeholder="password" 
			onChange={(e)=>this.handleChange(e)} />
			</p>
			<p class="forgot" align="right"><a href="#">Forgot Password?</a></p>
			<p>
				<span class="pheader"> Doesnot have an account? <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/register'} >Sign Up </a>here</span>
				<button class="login-btn" type="submit"  onClick={()=>window.location.href='/userdash'}>Login</button>
			</p>
			</form>
		</div>
	</div>
        );
    }
}
export default Login;