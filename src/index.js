import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		return (
			<h1> It Works </h1>
		);
	}
};

let formatuser=(user)=> {
	return user.firstname+" "+user.lastname;
};

const user = {
	firstname:"test",
	lastname:"ravilla"
};

const element = (
	 <h1>
	    Hello, {formatuser(user)}!
	  </h1>
	);
const app = document.getElementById("root");
ReactDOM.render(element,app);