import React, { Component } from 'react';

export class EmptyBooks extends Component {
	constructor(props){
  super(props)
  this.state = {
    value:'',
  }
  }
  handleChange=(event)=>{
  	this.setState({value:event.target.value});
   
  }
  print=(e)=>{
  	console.log(this.state.value)
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
       <div class="form-group">
              <div class="form-group mb-4">
                <label for="password">Book Category</label>
                  <div class="input-group">
                  <select onChange={(e)=>this.handleChange(e)} name='value'>
                    <option value="Fiction">Fiction</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                  </select>
                 </div>  
                </div>
         </div>
         <button onClick={(e)=>this.print(e)}>PRINT</button>
			</div>
		);
	}
}
export default EmptyBooks;
