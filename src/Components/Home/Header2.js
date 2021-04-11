import React, { Component } from 'react';

export class Header2 extends Component {
	render() {
		return (
			<div>
				 <div className="header2">
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
