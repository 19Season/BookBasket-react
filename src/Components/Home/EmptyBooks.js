import React, { Component } from 'react';

export class EmptyBooks extends Component {
	constructor(props){
  super(props)
  this.state = {
    value:'',
  }
  }
  change=(event)=>{
  	this.setState({[event.target.name]:event.target.selectedIndex.value});
  }
  print=(e)=>{
  	console.log(this.state.selected)
  }
	render() {
	const mystyle = {
      color: "red",
      padding: "200px",
      fontFamily: "Arial"
    };

		return (
			<div>
				<h1 style={mystyle}>Books will be available soon.</h1>
			</div>
		);
	}
}
export default EmptyBooks;
