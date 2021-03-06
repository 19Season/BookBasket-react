import React, { Component } from 'react'
import { getUsers } from '../../apiCall/UserAPI'
import { Button } from '@material-ui/core'

export default class UserManagement extends Component {
    
  state={
		users:[]
	}

    componentDidMount() {
        this.getallUsers();
    }

    getallUsers=()=>{
        let self=this;
        getUsers().then(function(res){
            self.setState({users:res.data})
        }).catch((err)=>console.log(err));
    }

  render() {
        return (
            <div>
                <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
    <a class="navbar-brand mr-lg-5" href="../../index.html">
        <img class="navbar-brand-dark" src="../../assets/img/brand/light.svg" alt="Volt logo" /> <img class="navbar-brand-light" src="../../assets/img/brand/dark.svg" alt="Volt logo" />
    </a>
    <div class="d-flex align-items-center">
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

        <div class="container-fluid bg-soft">
            <div class="row">
                <div class="col-12">

                    <nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
      <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="d-flex align-items-center">
          <div class="user-avatar lg-avatar mr-4">
            <img src="" class="card-img-top rounded-circle border-white" alt="Bonnie Green" />
          </div>
        </div>
      </div>
      <ul class="nav flex-column">
      <li class="nav-item  active ">
          <a onClick={()=>window.location.href='/admindash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Overview</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/products'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-hand-holding-usd"></span></span>
              <span>Books </span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/users'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Users</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/orders'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Order</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/admins'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Admin</span>
          </a>
        </li>
         <li>
         <Button  variant="contained" color="secondary" onClick={()=>window.location.href='/'}>Logout</Button>
        </li>
        </ul>
    </div>
</nav>









                
                    <main class="content">

                        


                        <div class="mt-5 px-4">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Username</th>						
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Contact</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.users.map((item)=>
                                    <tr>
                                        <td>
                                            <a href="../invoice.html" class="font-weight-bold">
                                                {item.id}
                                            </a>
                                        </td>
                                        <td>
                                            <span class="font-weight-normal">{item.username}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.address}</span></td>                        
                                        <td><span class="font-weight-normal">{item.email}</span></td>

                                        <td><span class="font-weight-bold text-warning">{item.contact}</span></td>
                                        <td>
                                        <div class="btn-group">
                                                <Button variant="contained" color="primary">Edit</Button>&nbsp;
                                                 <Button variant="contained" color="primary">Delete</Button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                                                
                                </tbody>
                            </table>
                           
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
