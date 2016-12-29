import React from "react";

import Todo from "../components/Todo";
import TodoActions from "../actions/TodoActions"
import TodoStore from "../stores/TodoStore"

export default class Todos extends React.Component {
	constructor(props){
		super(props);
		this.getTodos = this.getTodos.bind(this);
		this.state={todos:TodoStore.getAll()};
	}

	componentDidMount() {
		TodoStore.on("change",this.getTodos);
	}

	componentWillUnmount() {
		TodoStore.removeListener("change",this.getTodos)
	}

	getTodos(){
		this.setState({
			todos:TodoStore.getAll()
		})
	}

	createTodo(text){
		TodoActions.createTodo("test");
	}

	render() {
		const {todos} =this.state;

		const TodoComponents = todos.map((todo)=>{
			return <Todo key={todo.id}{...todo}/>
		})
		return (
			<div>
				<button onClick={this.createTodo.bind(this)}> Create</button>
				<input />
				<h1>Todos</h1>
				<ul>{TodoComponents}</ul>
			</div>
		);
	}
};