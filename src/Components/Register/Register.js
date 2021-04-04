import React, { Component } from 'react';
import './register.css';
import {registerUser} from '../../apiCall/Login.js';

export class Register extends Component {
	constructor(props){
		super(props);
		this.state={
				"fullname":'',
				'username':'',
				'password':'',
				'address':'',
				'contact':'',
				'email':'',
		};
	}
	handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit=(event)=>{
		event.preventDefault();
		var date=Date.now()
		registerUser(this.state.username,this.state.password,this.state.address,this.state.contact,this.state.email,3).then((res)=>{
			localStorage.setItem("expiry_time",JSON.stringify(date+86480000));
			localStorage.setItem("userinfo",JSON.stringify(res));
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
					<h1 align="center">Signup</h1>
					<p align="center" class="pheader">Fill up form to be part of Book Basket.</p>
				<form onSubmit={(event)=>this.handleSubmit(event)}>
			<p>
				Username:<input type="text" name="username" placeholder="Enter username" onChange={(e)=>this.handleChange(e)}  />
			</p>
			<p>
				Address:<input type="text" name="address" placeholder="Enter Address"  onChange={(e)=>this.handleChange(e)} />
			</p>
			<p>
				Contact:<input type="text" name="contact" placeholder="Enter Contact" onChange={(e)=>this.handleChange(e)}  />
			</p>
			<p>
			Email: 
			<input type="text" name="email" class="inputData" placeholder="Enter Email Address"  onChange={(e)=>this.handleChange(e)} />
			</p>
			<p>
			Password
			<input type="password" name="password" class="inputData" placeholder="Enter Password" onChange={(e)=>this.handleChange(e)}  />
			</p>
			<p>
				Confirm Password:
				<input type="password" name="password2" placeholder="Confirm Password" />
			</p>
			<p>
				<span class="pheader"> Already have an account? <a onClick={()=>window.location.href='/login'} >Loginhere</a></span>
				<button class="login-btn" type="submit" onClick={()=>window.location.href='/login'} >Sign Up</button>
			</p>
		</form>
	</div>
			</div>
		);
	}
}
export default Register;
