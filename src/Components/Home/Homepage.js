import React, { Component } from "react";
import "./header.css";
import BannerImage from "./banner.jpg";
import BookImage from "./book-img.jpg";
import { getBooks } from "../../apiCall/BookAPI";
import { Button } from '@material-ui/core'

export class Homepage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getallBooks();
  }

  getallBooks = () => {
    let self = this;
    getBooks()
      .then(function (res) {
        self.setState({ books: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="header">
          <div className="header1">
            <h1>book Basket</h1>
            <div className="social">
              <p>
                <span>Facebook</span> <span>Instagram</span>
              </p>
              <p>+977-987654321</p>
              <p>info@bookbasket.com</p>
            </div>
          </div>
        </div>
		{/* END */}
    
		{/* Banner */}
          <div className="image">
            <img src={BannerImage} />
          </div>
         {/* END */}

		{/* Content */}
		<div className="content">
			<div className="list">
				<ul>
					<li>Top Books</li>
					<li>Categories</li>
					<ul>
						<li>Comedy</li>
						<li>Sci-Fi</li>
						<li>Programming</li>
						<li>Novels</li>
						<li>Used Books</li>
					</ul>
					<li>Buy Books</li>
					<li>Borrow Books</li>
				</ul>
			</div>
			<div className="book-content">
			{this.state.books.map((item)=>
				<div className="book-card">
					<div className="book-img">
							<img src={BookImage} />
					</div>
					<div className="book-data">
						<p>{item.title}</p>
						<p>{item.price}</p>
						<Button variant="outlined" onClick={window.location.href='/pr'} >View More</Button>
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
