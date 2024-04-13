import './ToDoForm.css';

import { useState } from 'react';
// imports redux methods
import { useDispatch, useSelector } from 'react-redux';
// import actions, selector(state) from reducer
import { add } from '../../redux/reducers/todoReducer.js';
import {
	notificationSelector,
	resetNotification,
} from '../../redux/reducers/notificationReducer.js';

function ToDoForm() {
	const [todoText, setTodoText] = useState('');
	const dispatch = useDispatch();

	const message = useSelector(notificationSelector);
	console.log(message);

	if (message) {
		setTimeout(() => {
			dispatch(add(todoText));
		}, 3000);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(add(todoText));
		setTodoText('');
	};

	return (
		<div className='container'>
			{message && (
				<div class='alert alert-success' role='alert'>
					<p>{message}</p>
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					className='form-control mb-3'
					value={todoText}
					onChange={(e) => setTodoText(e.target.value)}
				/>
				<button className='btn btn-success float-end' type='submit'>
					Create Todo
				</button>
			</form>
		</div>
	);
}

export default ToDoForm;
