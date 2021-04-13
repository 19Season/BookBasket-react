import React, { Component } from 'react';

export class LoggedHeader extends Component {
  constructor(props){
  super(props)
  this.state = {
    user:JSON.parse(localStorage.getItem('userinfo')),
  }
}
	render() {
		return (
			<div>
				 <div className="header2">
            <div className="buttons">
              <p>Be a part of our platform? </p>
              <button class="btn-login" onClick={(e)=>window.location.href=`/userdash/${this.state.user.id}`}>Go to Dashboard</button>
     
            </div>
          </div>
        
			</div>
		);
	}
}
export default LoggedHeader;
