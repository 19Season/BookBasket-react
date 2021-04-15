import React, { Component } from "react";
import "./header.css";
import BookImage from "./book-img.jpg";
import { getBookById } from "../../apiCall/BookAPI";
import { orderBook } from "../../apiCall/OrderAPI";
import {Header2} from "./Header2.js";
import LoggedHeader from "./LoggedHeader.js";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

//const theTheme = createMuiTheme({ palette: { primary: grey } })

export class Product extends Component {
  
constructor(props){
  super(props)
  this.state = {
    search:'',
    book: [],
    id:this.props.match.params.id,
    isLogin:!!localStorage.getItem('userinfo') || false,
    user:JSON.parse(localStorage.getItem('userinfo')) || null,
  }
  }
  

  componentDidMount() {
    this.getBook(this.state.id);
    console.log(this.state.user)
  }
   handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }

  handleSearch=(event)=>{
    window.location.href=`/srch/${this.state.search}`
  }
  getBook = () => {
    let self=this;
    getBookById(self.state.id).then(function (res) {
        self.setState({ book: res.data });
      })
      .catch((err) => console.log(err));
  };

  orderBooks=(event)=>{
    
    if(this.state.user ==null || this.state.user==[]|| this.state.user==''){
      window.location.href='/login'
    }else{
    orderBook(this.state.book.id,this.state.user.id,3)
    .then(function (res) {
        window.location.href=`/userdash/${this.state.user.id}`
      })
      .catch((err) => console.log(err));
  }
  }

  render() {
    return (
      <div>
        <div className="header">
        {(() => {
        if (this.state.isLogin) {
          return (
            <div>
             <LoggedHeader />
            </div>
          )
        }else {
          return (
            <div> <Header2/></div>
          )
        }
      })()}

          <div className="header1">
            <h1> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/'}> book Basket</a></h1>
            <div></div>
            <div className="search">
              <input type="text" onChange={(event)=>this.handleChange(event)}  required name="search" className="keyword" placeholder="Search book by title, author, keyword" /> 
              <input type="submit" onClick={(event)=>this.handleSearch(event)}  value="Search" className="src-btn" />
            </div>
          </div>

         
        </div>
        {/* END */}

        {/* Content */}
        <div className="ccontent">
         <div className="list">
        <ul>
          <li class="cat">Top Books</li>
          <li class="cat">Categories</li>
          <ul class="category">
            <li>Comedy</li>
            <li>Sci-Fi</li>
            <li>Programming</li>
            <li>Novels</li>
            <li>Education</li>
          </ul>
          <li class="cat" onClick={()=>window.location.href='/sell'}>Buy Books</li>
          <li class="cat" onClick={()=>window.location.href='/borrow'}>Borrow Books</li>
        </ul>
      </div>
          
        
          <div className="product-content">

            <div className="book-img">
              <img src={this.state.book.image} />
            </div>
           
            <div className="book-details">
              <h3>{this.state.book.title}</h3>
              <h5><small>by </small>{this.state.book.author}</h5>
              <p>
               {this.state.book.description}
              </p>
            </div>
         
            <div className="order">
              <p><small>Type: </small><b>{this.state.book.type}</b></p>
              <i>{this.state.book.price}</i>
              <br />
             
              <Button variant="outlined" color="primary" className="orderButton" onClick={(event)=>this.orderBooks(event)}>Order Now</Button>
              
            </div>
          </div>
         
        </div>

        {/* Footer */}
        <div class="footer">
          <div class="about-us">
            <h3>ABOUT BOOKBASKET</h3>
            <p>
              Book Basket is an online platform where a person can buy, sell
              books and even borrow books for certain period of time in
              reasonable price.If you are a book lover, then
            </p>
          </div>
          <div class="quick-links">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a>Categories</a>
              </li>
              <li>
                <a>Latest Books</a>
              </li>
              <li>
                <a>Top Books</a>
              </li>
              <li>
                <a>Borrow Books</a>
              </li>
            </ul>
          </div>
          <div class="contact">
            <h3>CONTACT US</h3>
            <ul>
              <li>+977-987654321</li>
              <li>bookbasket@gmail.com</li>
              <li>bookbasket.com</li>
            </ul>
          </div>
        </div>
        {/* END */}
      </div>
    );
  }
}
