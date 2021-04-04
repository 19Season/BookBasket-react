import React, { Component } from 'react';
import "./header.css";
import BannerImage from './banner.jpg'
import BookImage from './book-img.jpg'
import { getBooksByCategory } from '../../apiCall/BookAPI';

export class Homepage extends Component {
	
	getCategory=(category)=>{
		getBooksByCategory(category).then(res=>{console.log(res)})
	}

	render() {
		return (
			<div>
				<div class="header">
		<div class="header-one">
			<div class="logo">
				<p>Book Basket</p>
			</div>
			<div class="search">
				<input type="text" name="search" placeholder="Search book by author or title" />
				<button>Search</button>
			</div>
			<div class="login">
				<button onClick={()=>window.location.href='/login'}>Sign in</button>
				<button onClick={()=>window.location.href='/register'}  class="signup">Sign up</button>
			</div>
		</div>
		<div class="header-two">
			<ul>
				<li onClick={()=>this.getCategory("Comedy")}>Comedy</li>
				<li>Programming</li>
				<li>Education</li>
			</ul>
		</div>
	</div>
	<div class="banner">
		<div class="banner-img">
				<img src= {BannerImage} />
		</div>
	</div>

	<div class="content">

		<h2 align="center">Latest Books</h2>
		<div class="book-show">
			<div class="book-card">
				<div class="book-img">
					<img alt="Java book" src={BookImage} />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>
		</div>
		<div class="browse">
			<button class="browse-btn">Browse</button>
		</div>



			<h2 align="center">Top Books</h2>
		<div class="book-show">
			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>

			<div class="book-card">
				<div class="book-img">
					<img alt="book_image" src="book-img.jpg" />
				</div>
				<div class="book-detail">
					<b>Java</b>
					<p>Shady</p>
					<i>NPR. 399</i>
				</div>
			</div>
		</div>
		<div class="browse">
			<button class="browse-btn">Browse</button>
			</div>
	<div class="footer">
			<div class="about-us">
				<h3>ABOUT BOOKBASKET</h3>
				<p>
					Book Basket is an online platform where a person can buy, sell books and even borrow books for certain period of time in reasonable price.If you are a book lover, then 
				</p>
			</div>
			<div class="quick-links">
				<h4>QUICK LINKS</h4>
				 <ul>
				 	<li>Categories</li>
				 	<li>Latest Books</li>
				 	<li>Top Books</li>
				 	<li>Borrow Books</li>
				 </ul>
			</div>
			<div class="contact">
				<h3>CONTACT US</h3>
				<ul>
					<li><i class="fab fa-facebook-f"></i></li>
					<li>Instagram</li>
					<li>Discord</li>
				</ul>
			</div>
	</div>
</div>
</div>
		);
	}
}
export default Homepage;
