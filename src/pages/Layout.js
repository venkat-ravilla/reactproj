import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	navigate(){
		this.props.router.push("/");
	}

	render() {
		return (
			<div>
				<h1>Killer News</h1>			
				<Link to="archives" class="btn btn-success">archives</Link>
				<button onClick={this.navigate.bind(this)} class="btn btn-danger">Featured</button>
				<Link to="settings">Settings</Link>
				{this.props.children}	
				
			</div>
		);
	}
};