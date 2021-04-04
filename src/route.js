import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import Result from './Components/Result.js';
import Homepage from './Components/Home/Homepage.js'
import Userdashboard from './Components/dashboard/Userdashboard.js';
import Admindashboard from './Components/admindashboard/Admindashboard.js';
import Addproduct from './Components/dashboard/Addproduct.js';
import AllBooks from './Components/ApiTest/AllBooks.js';
import Productmanagement from './Components/admindashboard/Productmanagement.js';
import UserManagement from './Components/admindashboard/UserManagement.js';
import AdminManagement from './Components/admindashboard/AdminManagement.js';
import OrderManagement from './Components/admindashboard/OrderManagement.js';

export class Routes extends Component {
	constructor(props){
		super(props);
		this.state={
			expired:localStorage.getItem('expiry_time'),
			isLogin:!!JSON.parse(localStorage.getItem('userinfo')),
			userinfo:JSON.parse(localStorage.getItem('userinfo')),
		}
	}
	componentDidMount(){
		console.log(this.state.isLogin);
		console.log(this.state.userinfo);
		console.log(this.state.expired);
		this.checkIfExpired()
	}
	checkIfExpired=()=>
	{
		if(this.state.userinfo && this.state.expired<=Date.now())
		{	
			localStorage.clear()
			window.location.reload();
		}	
	}
	
	render() {
		return (
			<div>
				<Router>
				{/* <Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/add" component={Addproduct} />
						<Route exact path="/allbooks" component={AllBooks} />
					</Switch> */}
					{
					this.state.isLogin?
					<Switch>
						<Route exact path="/login" component={Userdashboard}/>
						<Route exact path="/" component={Homepage} />
						
					</Switch>:
					<Switch>
						<Route exact path="/register" component={Register} />
						<Route exact path="/" component={Homepage} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/admindash" component={Admindashboard} />
						<Route exact path="/products" component={Productmanagement} />
						<Route exact path="/users" component={UserManagement} />
						<Route exact path="/admins" component={AdminManagement} />
						<Route exact path="/orders" component={OrderManagement} />
					</Switch>
	}
				</Router>
			</div>
		);
	}
}
export default Routes;
