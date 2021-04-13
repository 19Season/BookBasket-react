import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import { getParticularUserOrder } from '../../apiCall/OrderAPI';
import { cancelOrder } from '../../apiCall/OrderAPI';
import './dash.css';

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

        <div class="container-fluid bg-soft">
            <div class="row">
                <div class="col-12">

                    <nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
     
      <ul class="nav flex-column">
      <li>
        <Button className="dash"  variant="contained" color="primary" onClick={()=>window.location.href='/'}> <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>&nbsp;Return to Home</Button>
        </li>
      <li class="nav-item  active  ">
          <a onClick={()=>window.location.href='/profile'} class="nav-link">
            <span class="sidebar-icon"><span class="fa fa-user-circle"></span></span>
            <span>{this.state.user.username}</span>
          </a>
        </li>
        <li class="nav-item   ">
          <a onClick={()=>window.location.href=`/userdash/${this.state.user.id}` } class="nav-link">
            <span class="sidebar-icon"><span  class="fa fa-book"></span></span>
            <span>Your Products</span>
          </a>
        </li>
        <li class="nav-item  ">
          <a onClick={()=>window.location.href='/addproducts'} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-plus"></span></span>
              <span>Add Products</span>
          </a>
        </li>
        <li class="nav-item ">
          <a onClick={()=>window.location.href='/userorders'} class="nav-link">
              <span class="sidebar-icon"><span class="fa fa-cart-plus"></span></span>
              <span>Your Orders</span>
          </a>
        </li>
         <li>
           <Button  variant="contained" color="secondary" onClick={(event)=>this.handleLogout(event)}>Logout</Button>
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
