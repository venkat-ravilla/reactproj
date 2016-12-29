import React from "react";

import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Archives extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	render() {
		return (
			<div>
				<h1>Archives {this.props.params.article}</h1>
			</div>
		);
	}
};