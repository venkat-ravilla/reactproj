import dispatcher from "../dispatcher/dispatcher"

function createTodo(text){
	dispatcher.dispatch({
		type:"CREATE_TODO",
		text
	})
}

function deleteTodo(id){
	dispatcher.dispatch({
		type:"DELETE_TODO",
		id
	})
}

export default {
	createTodo,
	deleteTodo
}