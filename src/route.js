import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Homepage from './Components/Home/Homepage.js'
import Userdashboard from './Components/dashboard/Userdashboard.js';
import Admindashboard from './Components/admindashboard/Admindashboard.js';
import Addproduct from './Components/dashboard/Addproduct.js';
import Productmanagement from './Components/admindashboard/Productmanagement.js';
import UserManagement from './Components/admindashboard/UserManagement.js';
import AdminManagement from './Components/admindashboard/AdminManagement.js';
import OrderManagement from './Components/admindashboard/OrderManagement.js';
import Userorder from './Components/dashboard/Userorder.js';
import Profile from './Components/dashboard/profile.js';
import AllBooks from './Components/ApiTest/AllBooks.js';
import EditProduct from './Components/dashboard/Editproduct.js';
import { Product } from './Components/Home/Product.js';
import Sell  from './Components/Home/Sell.js';
import Borrow  from './Components/Home/Borrow.js';
import Search  from './Components/Home/Search.js';
import ImageUpload  from './Components/Home/ImageUpload.js';

export class Routes extends Component {
	constructor(props){ 
		super(props);
		this.state={
			expired:localStorage.getItem('expiry_time')||null,
			isLogin:localStorage.getItem('userinfo')?!!JSON.parse(localStorage.getItem('userinfo')):false,
			userinfo:localStorage.getItem('userinfo')?JSON.parse(localStorage.getItem('userinfo')):[],
		}
	}
	componentDidMount(){
		this.checkIfExpired()
	}
	checkIfExpired=()=>
	{
		if(this.state.userinfo.length && this.state.expired<=Date.now())
		{	
			console.log(this.state.userinfo)
			console.log(this.state.expired)
			localStorage.clear()
			window.location.reload();
		}	
	}
	
	render() {
		return (
			<div>
				<Router>
				<Switch>
			
					</Switch>
					{
					!this.state.isLogin?
					<Switch>
						
						<Route exact path="/login" component={Login}/>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/pr/:id" component={Product} />
						<Route exact path="/sell" component={Sell} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/srch/:key" component={Search} />
						<Route exact path="/img" component={ImageUpload} />

					</Switch>:
					<Switch>
						<Route exact path="/srch" component={Search} />
						<Route exact path="/" component={Homepage} />
						<Route exact path="/login" component={Homepage} />

						<Route exact path="/admindash" component={Admindashboard} />
						<Route exact path="/products" component={Productmanagement} />
						<Route exact path="/users" component={UserManagement} />
						<Route exact path="/admins" component={AdminManagement} />
						<Route exact path="/orders" component={OrderManagement} />
					
						<Route exact path="/userdash/:userId" component={Userdashboard} />
						<Route exact path="/addproducts" component={Addproduct} />
						<Route exact path="/editproducts" component={EditProduct} />
						<Route exact path="/userorders" component={Userorder} />
						<Route exact path="/profile" component={Profile} />

						<Route exact path="/pr/:id" component={Product} />
						<Route exact path="/srch/:key" component={Search} />
						<Route exact path="/borrow" component={Borrow} />
						
					</Switch>
	}
				</Router>
			</div>
		);
	}
}
export default Routes;
