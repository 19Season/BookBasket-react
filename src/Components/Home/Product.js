import React, { Component } from "react";
import "./header.css";
import BookImage from "./book-img.jpg";
import { getBooks } from "../../apiCall/BookAPI";
import { Button, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

//const theTheme = createMuiTheme({ palette: { primary: grey } })

export class Product extends Component {
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
          
          <div className="product-content">
            <div className="book-img">
              <img src={BookImage} />
            </div>
            <div className="book-details">
              <h3>OOP in Java</h3>
              <h5><small>by </small>Ayush Basnet</h5>
              <p>
                Java is a class-based, object-oriented programming language that
                is designed to have as few implementation dependencies as
                possible. It is a general-purpose programming language intended
                to let application developers write once, run anywhere
                (WORA),[16] meaning that compiled Java code can run on all
                platforms that support Java without the need for
                recompilation.[17] Java applications are typically compiled to
                bytecode that can run on any Java virtual machine (JVM)
                regardless of the underlying computer architecture. The syntax
                of Java is similar to C and C++, but has fewer low-level
                facilities than either of them.
              </p>
            </div>
            <div className="order">
              <i>NPR. 299</i>
              <br />
             
              <Button variant="outlined" color="primary" className="orderButton">Order Now</Button>
              
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
