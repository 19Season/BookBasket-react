import React, { Component } from 'react'
import {getBooks } from '../../apiCall/BookAPI'
import {approveBooks } from '../../apiCall/BookAPI'
import { Button } from '@material-ui/core'

export default class Productmanagement extends Component {

  state={
		books:[]
	}

    componentDidMount() {
        this.getallBooks();
    }

    getallBooks=()=>{
        let self=this;
        getBooks().then(function(res){
            self.setState({books:res.data})
        }).catch((err)=>console.log(err));
    }

    approve=(e,id)=>{
      approveBooks(id).then(function(res){
        console.log(res.data)
        window.location.href='/admindash'
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
      <li class="nav-item   ">
          <a onClick={()=>window.location.href='/admindash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Overview</span>
          </a>
        </li>
        <li class="nav-item  active">
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

                       

                        <div class="mt-5 px-10">
                            <table class="table table-hover md-12">
                                <thead>
                                    <tr>
                                        <th>Title</th>						
                                        <th>Author</th>
                                        <th>Price</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.books.map((item)=>
                                    <tr>
                                        <td>
                                            <span class="font-weight-normal">{item.title}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.author}</span></td>                        
                                        <td><span class="font-weight-normal">{item.price}</span></td>
                                        <td><span class="font-weight-bold">{item.type}</span></td>
                                        <td><span class="font-weight-bold">{item.status}</span></td>
                                        <td>
                                            <div class="btn-group">
                                                <Button variant="contained" color="primary" onClick={(e)=>this.approve(e,item.id)} type="submit" >&nbsp;Approve&nbsp;</Button>
                                                 {/* <Button variant="contained" color="primary" onClick={this.handleDelete(item.id)}>Delete</Button> */}
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
