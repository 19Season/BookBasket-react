import React, { Component } from "react";
import "./header.css";
import BookImage from "./book-img.jpg";
import { getBooksByType } from "../../apiCall/BookAPI";
import { orderBook } from "../../apiCall/OrderAPI";
import {Header2} from "./Header2.js";
import LoggedHeader from "./LoggedHeader.js";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

export class Borrow extends Component {
  
constructor(props){
  super(props)
  this.state = {
    book: [],
    id:this.props.match.params.id,
    user:localStorage.getItem('userinfo') || null,
  }
  }
  
  componentDidMount() {
    this.getBook();
    console.log(this.state.book);
  }

  getBook = () => {
    let self=this;
    getBooksByType("Borrow").then(function (res) {
        self.setState({ book: res.data });
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };
  handleSearch=(event)=>{
    window.location.href=`/srch/${this.state.search}`
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
              <input type="text" onChange={(event)=>this.handleChange(event)} name="search" className="keyword" placeholder="Search book by title, author, keyword" /> 
              <input type="submit" onClick={(event)=>this.handleSearch(event)}  value="Search" className="src-btn" />
            </div>
          </div>

         
        </div>
        {/* END */}

        {/* Content */}
       
          <h2 align="left">Books Available for Borrow:</h2>
          <hr />
          <div className="sell-content">
      	
			{this.state.book.map((item)=>
				<div className="book-card">
					<div className="book-img">
							<img src={BookImage} />
					</div>
					<div className="book-data">
						<p>{item.title}</p>
						<p>{item.price}</p>
						<button class="view"><a style={{ cursor:"pointer" }} onClick={(e)=>window.location.href=`/pr/${item.id}`}>View More</a></button>
					</div>
				</div>
				)}
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
export default Borrow;