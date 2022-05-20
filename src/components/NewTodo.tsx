import React, { useRef } from "react";

import "./NewTodo.css";

type NewToProps = {
	onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewToProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = textInputRef.current!.value;
		props.onAddTodo(enteredText);
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div className="form-control">
				<label htmlFor="todo-text">Todo Text</label>
				<input type="text" id="todo-text" ref={textInputRef} />
				<button type="submit">Add Todo</button>
			</div>
		</form>
	);
};

export default NewTodo;
