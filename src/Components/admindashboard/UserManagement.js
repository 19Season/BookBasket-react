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
        </ul>
    </div>
</nav>









                
                    <main class="content">

                        <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark pl-0 pr-2 pb-0">
    <div class="container-fluid px-0">
      <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">
        <div class="d-flex">

          <form class="navbar-search form-inline" id="navbar-search-main">
            <div class="input-group input-group-merge search-bar">
                <span class="input-group-text" id="topbar-addon"><span class="fas fa-search"></span></span>
                <input type="text" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon" />
            </div>
          </form>
        </div>

        <ul class="navbar-nav align-items-center">

        <li class="nav-item dropdown">
            <a class="nav-link pt-1 px-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media d-flex align-items-center">
                <div class="media-body ml-2 text-dark align-items-center d-none d-lg-block">
                <Button variant="contained" color="secondary" onClick={()=>window.location.href='/'}>Logout</Button>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</nav>


                        <div class="card card-body border-light shadow-sm">
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
