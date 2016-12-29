import {EventEmitter} from "events";

import dispatcher from "../dispatcher/dispatcher";

class TodoStore extends EventEmitter{
	constructor(){
		super()
		this.createTodo = this.createTodo.bind(this);
		this.todos=[
			{
				id:1,
				text:"go shopping",
				complete: false
			},
			{
				id:2,
				text:"Pay Bills",
				complete: false
			}
		]
	}

	createTodo(text){
		const id= Date.now();
		this.todos.push({
			id,
			text,
			complete:false
		});
		this.emit("change");
	}

	getAll(){
		return this.todos;
	}

	handleActions(action){
		switch(action.type){
			case "CREATE_TODO":{
				this.createTodo(action.text);
			}
			case "DELETE_TODO":{
				this.createTodo(action.text);
			}
			
		}
	}
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;