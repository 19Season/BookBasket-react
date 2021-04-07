import React, { Component } from 'react'
import {getBookById } from '../../apiCall/BookAPI'
import { Button } from '@material-ui/core'

export default class EditProduct extends Component {

  
    state={
		books:[]
	}


    componentDidMount() {
        this.getBook();
    }

    getBook=()=>{
        let self=this;
        getBookById(28).then(function(res){
            self.setState({books:res.data})
            console.log(res.data)
        }).catch((err)=>console.log(err));
    }

    handleChange=(event)=>{
		this.setState({[event.target.name]:event.target.value});
	}

	handleSubmit=(event)=>{
		event.preventDefault();
		// var date=Date.now()
		// addBook(this.state.title,this.state.author,this.state.price,this.state.category,this.state.description,this.state.type,5,3).then((res)=>{
		// 	console.log(res);
        //     window.location.href="/products"
		// }).catch((err)=>{
		// 	if(err.response.status===404){
		// 		this.setState({
        //         title:'',
        //         author:'',
        //         price:'',
        //         type:'',
        //         description:'',
        //         addedBy:''});
		// 	}
		// }
		// )
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
          <a onClick={()=>window.location.href='/profile'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Your Profile</span>
          </a>
        </li>
        <li class="nav-item   ">
          <a onClick={()=>window.location.href='/userdash'} class="nav-link">
            <span class="sidebar-icon"><span class="fas fa-chart-pie"></span></span>
            <span>Your Products</span>
          </a>
        </li>
        <li class="nav-item active ">
          <a onClick={()=>window.location.href='/addproducts'} class="nav-link">
              <span class="sidebar-icon"><span class="fas fa-hand-holding-usd"></span></span>
              <span>Add Products</span>
          </a>
        </li>
        <li class="nav-item ">
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
           
          </li>
        </ul>
      </div>
    </div>
</nav>


                        <div class=""> 
                                                            <main>

                                <section class="vh-lg-100 d-flex align-items-center">
                                    <div class="container">
                                        <div class="row justify-content-center form-bg-image" >
                                            <div class="col-12 d-flex align-items-center justify-content-center">
                                                <div class="signin-inner  bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                                    <div class="text-center text-md-center">
                                                        <h1 class="h3">Edit Book</h1>
                                                    </div>
                                                    {/* {this.state.books.map((item)=> */}
                                                    <form  class="" onSubmit={(event)=>this.handleSubmit(event)}>
                                                        <div class="form-group ">
                                                            <label for="email">Book Title</label>
                                                            <div class="input-group">
                                                                <input type="text" class="form-control"  name="title" autofocus required onChange={(e)=>this.handleChange(e)} />
                                                            </div>  
                                                        </div>
                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Book Author</label>
                                                                <div class="input-group">
                                                                    <input type="text" placeholder="Book Author" class="form-control" name="author" required  onChange={(e)=>this.handleChange(e)}/>
                                                                </div>  
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Book Category</label>
                                                                <div class="input-group">
                                                                    <input type="text" placeholder="Book Price" class="form-control" name="category" required onChange={(e)=>this.handleChange(e)}/>
                                                                </div>  
                                                            </div>
                                                        </div>


                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Book Price</label>
                                                                <div class="input-group">
                                                                    <input type="text" placeholder="Book Price" class="form-control" name="price" required onChange={(e)=>this.handleChange(e)}/>
                                                                </div>  
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Book Type</label>
                                                                <div class="input-group">
                                                                    <input type="text" placeholder="Book Price" class="form-control" name="type" required onChange={(e)=>this.handleChange(e)}/>
                                                                </div>  
                                                            </div>
                                                        </div>

                                                        <div class="form-group">
                                                            <div class="form-group mb-4">
                                                                <label for="password">Book Description</label>
                                                                <div class="input-group">
                                                                    <input onChange={(e)=>this.handleChange(e)} type="textarea" placeholder="Book Description" class="form-control"  name="description" required />
                                                                </div>  
                                                            </div>
                                                        </div>
                                                    

                                                        <button type="submit" class="btn btn-block btn-primary">Edit Book</button>
                                                </form>
                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </section>
                                </main>
                                   
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
            </div>
        )
    }
}
