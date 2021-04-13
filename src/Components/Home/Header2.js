import React, { Component } from 'react';
import './header.css'
export class Header2 extends Component {
	render() {
		return (
			<div>
			<div className="header2">
			<div className="social">
              <p>
                <span><i class="fa fa-facebook-square" aria-hidden="true"></i></span> <span>Instagram</span>
              </p>
              <p>+977-987654321</p>
              <p>info@bookbasket.com</p>
            </div>
            <div className="buttons">
              <p>Be a part of our platform? </p>
              <button class="btn-login" onClick={(e)=>window.location.href='/login'}>Login</button>
              <button  class="btn-register" onClick={(e)=>window.location.href='/register'}>  Register</button>
            </div>
          </div>
        
			</div>
		);
	}
}
