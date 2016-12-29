import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Settings extends React.Component {
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
				<h1>Settings News</h1>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.name}/>
				<Footer />
			</div>
		);
	}
};