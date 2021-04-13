import React, { Component } from "react";
import "./header.css";
import {Header2} from "./Header2.js";
import LoggedHeader from "./LoggedHeader.js";
import BannerImage from "./banner.jpg";
import BookImage from "./book-img.jpg";
import { availableBooks} from "../../apiCall/BookAPI";
import { Button } from '@material-ui/core'

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
    this.login()
    console.log(this.state.isLogin)
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

  login=()=>{
    if (this.state.isLogin) {
      return <Header2 />
    }else{
      return <LoggedHeader />
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          <Header2 />

          <div className="header1">
            <h1> <a style={{ cursor:"pointer" }} onClick={()=>window.location.href='/'}> book Basket</a></h1>
            <div></div>
            <div className="search">
              <input type="text" onChange={(event)=>this.handleChange(event)} name="search" className="keyword" placeholder="Search book by title, author, keyword" /> 
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

    <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
        <ul class="grid-container">
                  <li class="grid-item">College Books</li>
                  <li class="grid-item">School Books</li>
                  <li class="grid-item">Action and Adventure</li>
                  <li class="grid-item">Classics</li>
                  <li class="grid-item">Comic</li>
                  <li class="grid-item">Fantasy</li>
                  <li class="grid-item">Historical Fiction</li>
                  <li class="grid-item">Horror</li>
                  <li class="grid-item">Romance</li>
                  <li class="grid-item">Science Fiction (Sci-Fi)</li>
                  <li class="grid-item">Short Stories</li>
                  <li class="grid-item">Biographies and Autobiographies</li>
                  <li class="grid-item">Poetry</li>
          </ul>
  </div>
  <button class="dropbtn">Old Boooks</button>
  <button class="dropbtn">New Books</button>
  </div> 

		{/* Content */}
		<div className="ccontent">
			{/*<div className="list">
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
			</div>*/}
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
              <li><a>Categories</a></li>
              <li><a>Latest Books</a></li>
              <li><a>Top Books</a></li>
              <li><a>Borrow Books</a></li>
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
