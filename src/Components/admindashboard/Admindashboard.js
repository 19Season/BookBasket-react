import React, { Component } from 'react';
import ".././css/volt.css";
import ".././vendor/notyf/notyf.min.css";
import ".././vendor/@fortawesome/fontawesome-free/css/all.min.css";
import { Button } from '@material-ui/core'
import { countBooks } from "../../apiCall/BookAPI";
import { countUsers } from "../../apiCall/UserAPI";
import { countOrders } from "../../apiCall/OrderAPI";

export default class Admindashboard extends Component {

  constructor(props){
  super(props)
  this.state = {
    allbook:0,
    allusers:0,
    allorder:0,
    user:localStorage.getItem('userinfo') || null,
  }
  }
  componentDidMount() {
    this.getallBooks();
    this.getallUsers();
    this.getallOrders();
  }

  getallBooks = () => {
    let self = this;
   countBooks()
      .then(function (res) {
        self.setState({ allbook: res.data });
      })
      .catch((err) => console.log(err));
  };

  getallUsers = () => {
    let self = this;
   countUsers()
      .then(function (res) {
        self.setState({ allusers: res.data });
      })
      .catch((err) => console.log(err));
  };

  getallOrders = () => {
    let self = this;
   countOrders()
      .then(function (res) {
        self.setState({ allorder: res.data });
      })
      .catch((err) => console.log(err));
  };




    render() {
        return (
            <div>
                <div>
                 <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
    <a class="navbar-brand mr-lg-5" href="../../index.html">
        <img class="navbar-brand-dark" src="" alt="Volt logo" /> <img class="navbar-brand-light" src="" alt="Volt logo" />
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
          <div class="d-block">
            <h2 class="h6">Hi, Jane</h2>
            <a href="../../pages/examples/sign-in.html" class="btn btn-secondary text-dark btn-xs"><span class="mr-2"><span class="fas fa-sign-out-alt"></span></span>Sign Out</a>
          </div>
        </div>
        <div class="collapse-close d-md-none">
            <a href="#sidebarMenu" class="fas fa-times" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                aria-label="Toggle navigation"></a>
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
                        <div>
                          <p>{this.state.allbook}</p>
                        </div>
                        <div>
                          <p>{this.state.allorder}</p>
                        </div>
                        <div>
                          <p>{this.state.allusers}</p>
                        </div>
                      </main>  
                </div>
            </div>
            </div>
        </div>
        </div>
        )
    }
}
