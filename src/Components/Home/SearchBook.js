import React, { Component } from 'react';

export class SearchBook extends Component {
	render() {

	const mystyle = {
      color: "red",
      padding: "50px",
      fontFamily: "Arial"
    };

		return (
			<div>
				<h2 style={mystyle}>We're sorry. We cannot find any matches for your search term.</h2>
			</div>
		);
	}
}
export default SearchBook;
