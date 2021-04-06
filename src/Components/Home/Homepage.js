import React, { Component } from 'react';
import "./header.css";
import BannerImage from './banner.jpg'
import BookImage from './book-img.jpg'
import { getBooks } from '../../apiCall/BookAPI';


export class Homepage extends Component {
	
	state={
		books:[]
	}

    componentDidMount() {
        this.getallBooks();
    }

    getallBooks=()=>{
        let self=this;
        getBooks().then(function(res){
            self.setState({books:res.data})
        }).catch((err)=>console.log(err));
    }


	render() {
		return (
			<div>
				<div class="header">
				
		</div>
	<div class="banner">
		<div class="banner-img">
				<img src= {BannerImage} />
		</div>
	</div>

	<div class="content">

		<h2 align="center">Latest Books</h2>
	
		<div class="book-show">
		{this.state.books.map((item)=>
			<div class="book-card">
				<div class="book-img">
					<img alt="Java book" src={BookImage} />
				</div>
				<div class="book-detail">
					<b>{item.title}</b>
					<p>{item.author}</p>
					<i>{item.price}</i>
				</div>
			</div>
			)}
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
