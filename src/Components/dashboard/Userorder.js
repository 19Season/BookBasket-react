import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { getParticularUserOrder } from '../../apiCall/OrderAPI';

export default class Userorder extends Component {

  state={
		order:[]
	}

    componentDidMount() {
        this.getallOrder();
    }

    getallOrder=()=>{
        let self=this;
        getParticularUserOrder(5).then(function(res){
          console.log(res)
            self.setState({order:res.data})
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
     
      <ul class="nav flex-column">
      <li class="nav-item ">
          <a onClick={()=>window.location.href='/profile'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Your Profile</span>
          </a>
        </li>
        <li class="nav-item">
          <a onClick={()=>window.location.href='/userdash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Your Products</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/addproducts'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-hand-holding-usd"></span></span>
              <span>Add Products</span>
          </a>
        </li>
        <li class="nav-item  active  ">
          <a onClick={()=>window.location.href='/userorders'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-cog"></span></span>
              <span>Your Orders</span>
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
            <div class="dropdown-menu dashboard-dropdown dropdown-menu-right mt-2">
              <a class="dropdown-item font-weight-bold" href="#"><span class="far fa-user-circle"></span>My Profile</a>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-cog"></span>Settings</a>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-envelope-open-text"></span>Messages</a>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-user-shield"></span>Support</a>
              <div role="separator" class="dropdown-divider"></div>
              <a class="dropdown-item font-weight-bold" href="#"><span class="fas fa-sign-out-alt text-danger"></span>Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
</nav>


                        <div class="card card-body border-light shadow-sm">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Ordered Book</th>						
                                        <th>Author</th>
                                        <th>Price</th>
                                        <th>Type</th>
                                        <th>Ordered From</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.order.map((item)=>
                                    <tr>
                                       
                                        <td>
                                            <span class="font-weight-normal">{item.bookId.title}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.bookId.author}</span></td>                        
                                        <td><span class="font-weight-normal">{item.bookId.price}0</span></td>
                                        <td><span class="font-weight-bold">{item.bookId.type}</span></td>
                                        <td><span class="font-weight-bold text-warning">{item.bookId.addedBy.username}</span></td>
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
