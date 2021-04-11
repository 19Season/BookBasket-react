import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { getParticularUserOrder } from '../../apiCall/OrderAPI';
import { cancelOrder } from '../../apiCall/OrderAPI';

export default class Userorder extends Component {

  state={
		order:[],
        user:JSON.parse(localStorage.getItem('userinfo')),
        id:'',
	}

    componentDidMount() {
        this.state.id=this.state.user.id;
        this.getallOrder();
      
        console.log(this.state.id)
    }

    getallOrder=()=>{
        let self=this;
        getParticularUserOrder(this.state.id).then(function(res){
          console.log(res)
            self.setState({order:res.data})
        }).catch((err)=>console.log(err));
    }

    handleLogout=(event)=>{
        event.preventDefault();
        localStorage.clear()
        window.location.href='/'
    }

    cancelOrders=(e,id)=>{
         cancelOrder(id).then(function(res){
          window.location.reload()
        }).catch((err)=>console.log(err));
    }


    render() {
         const {id}=this.state;
        return (
            <div>


            <div className="header1">
            <h1 style={{ margin:"auto" }}> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/'}> book Basket</a></h1>
            </div>

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
          <a onClick={()=>window.location.href=`/userdash/${id}`} class="nav-link">
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
         <li>
         <Button  variant="contained" color="secondary" onClick={()=>window.location.href='/'}>Logout</Button>
        </li>
        </ul>
    </div>
</nav>









                
                    <main class="content">

                       


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
                                            <span class="font-weight-normal">{item.book.title}</span>
                                        </td>
                                        <td><span class="font-weight-normal">{item.book.author}</span></td>                        
                                        <td><span class="font-weight-normal">{item.book.price}0</span></td>
                                        <td><span class="font-weight-bold">{item.book.type}</span></td>
                                        <td><span class="font-weight-bold text-warning">{item.book.addedBy.username}</span></td>
                                        <td>
                                            <div class="btn-group">
                                                <Button variant="contained" color="primary" onClick={(e)=>this.cancelOrders(e,item.id)}>Cancel</Button>
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
