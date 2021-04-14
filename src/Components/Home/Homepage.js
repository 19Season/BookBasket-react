import React, { Component } from "react";
import "./header.css";
import {Header2} from "./Header2.js";
import LoggedHeader from "./LoggedHeader.js";
import BannerImage from "./banner.jpg";
import BookImage from "./book-img.jpg";
import { availableBooks} from "../../apiCall/BookAPI";
import { Button } from '@material-ui/core'
import EmptyBooks  from './EmptyBooks.js';

export class Homepage extends Component {
 
  constructor(props){
  super(props)
  this.state = {
    search:'',
    books: [],
    isLogin:!!localStorage.getItem('userinfo') || false,
    user:localStorage.getItem('userinfo') || null,
  }
  }
  componentDidMount() {
    this.getallBooks();
    console.log(this.state.isLogin)
  }

  handleCategory=(key,event)=>{
      window.location.href=`/category/${key}`
  }

  handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value});
  }

  handleSearch=(event)=>{
    window.location.href=`/srch/${this.state.search}`
  }

  getallBooks = () => {
    let self = this;
    availableBooks()
      .then(function (res) {
        self.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
  };

 

  render() {
    const myStyle={
      
    }
  
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
            <div>  <Header2/></div>
          )
        }
      })()}

          <div className="header1">
            <h1> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/'}> book Basket</a></h1>
            <div></div>
            <div className="search">
              <input type="text" onChange={(event)=>this.handleChange(event)} required name="search" className="keyword" placeholder="Search book by title, author, keyword" /> 
              <input type="submit" onClick={(event)=>this.handleSearch(event)}  value="Search" className="src-btn" />
            </div>
          </div>

         
        </div>
		{/* END */}
    
		{/* Banner */}
          <div className="image">
            <img src={BannerImage} />
          </div>
    {/* END */}
    <div class="linebar">
    <div class="dropdown">
    <button class="dropbtn">Categories&nbsp;
      <i class="fa fa-caret-down sup"></i>
    </button>
  <button class="dropbtn"><a onClick={(e)=>window.location.href='/sell'}>Buy Books</a></button>
  <button class="dropbtn"><a onClick={(e)=>window.location.href='/borrow'}>Borrow Books</a></button>
  </div> 
  <div class="dropdown-content">
        <ul class="grid-container">
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("College Books",event)}>College Books</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("School Books",event)}>School Books</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Action and Adventure",event)}>Action and Adventure</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Classics",event)}>Classics</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Comic",event)}>Comic</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Fantasy",event)}>Fantasy</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Historical Fiction",event)}>Historical Fiction</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Horror",event)}>Horror</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Romance",event)}>Romance</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Science Fiction (Sci-Fi)",event)}>Science Fiction (Sci-Fi)</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Short Stories",event)}>Short Stories</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Biographies and Autobiographies",event)}>Biographies and Autobiographies</a></li>
                  <li class="grid-item"><a onClick={(event)=>this.handleCategory("Poetry",event)}>Poetry</a></li>
          </ul>
  </div>
</div>



		{/* Content */}
    {(() => {
        if(this.state.books==[]||this.state.books=='') {
          return (
            <div>
            <EmptyBooks />
            </div>
          )
        }else {
          return (
            <div>
		<div className="ccontent">
      <div className="book-content">
      
        
            {this.state.books.map((item)=>
        <div className="book-card">
          <div className="book-img">
              <img src={BookImage} />
          </div>
          <div className="book-data">
            <p><b>{item.title}</b></p>
            <p>by :{item.author}</p>
            <p><i>NPR.{item.price}</i></p>
            <button class="view"><a style={{ cursor:"pointer" }} onClick={(e)=>window.location.href=`/pr/${item.id}`}>View More</a></button>
          </div>
        </div>
      )}
        </div>
        </div>
            </div>
          )
        }
      })()}
			
      {/* Content}

        

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
              <li><a href="#cat">Categories</a></li>
              <li><a>Latest Books</a></li>
              <li><a href='/sell'>Buy Books</a></li>
              <li><a href='/borrow'>Borrow Books</a></li>
              <li><a onClick={(e)=>window.location.href=`/userdash/${this.state.user.id}`}>Dashboard</a></li>
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
export default Homepage;
