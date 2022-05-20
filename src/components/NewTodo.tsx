import React, { useRef } from "react";

const NewTodo: React.FC = () => {
	const textInputRef = useRef<HTMLInputElement>(null);

	const todoSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();

		const enteredText = textInputRef.current!.value;
		console.log(enteredText);
	};

	return (
		<form onSubmit={todoSubmitHandler}>
			<div>
				<label htmlFor="todo-text">Todo Text</label>
				<input type="text" id="todo-text" ref={textInputRef} />
				<button type="submit">Add Todo</button>
			</div>
		</form>
	);
};

export default NewTodo;