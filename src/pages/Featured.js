import React from "react";

export default class Featured extends React.Component {
	constructor(props){
		super(props);
		this.state={name:"Venkata Ramana"};
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	changeTitle(title){
		this.setState({name:title})
	}

	render() {
		return (
			<div>
				<h1>Featured News</h1>
			</div>
		);
	}
};