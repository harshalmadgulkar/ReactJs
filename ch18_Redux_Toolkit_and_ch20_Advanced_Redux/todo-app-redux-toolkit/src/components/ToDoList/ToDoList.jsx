import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
	toggle,
	todoSelector,
	// setInitialState,
	getInitialState,
} from '../../redux/reducers/todoReducer.js';

// import axios from 'axios';
// import styles
import './ToDoList.css';

function ToDoList() {
	const dispatch = useDispatch();
	//  get the current state of our todos from redux store
	const todos = useSelector(todoSelector);
	console.log(todos);

	// empty dependency array means this effect will only run once (component mounts)
	useEffect(() => {
		// WAY 3 CALLING FUNC FROM REDUCER WHO WILL USE "ASYNCTHUNK"
		// instead of calling the API directly, we're using a Redux action creator
		// to make the API request and then dispatch an action
		// first time it runs - gets data from server
		dispatch(getInitialState());  

		// WAY2 AXIOS CALL API & DISPATCH FROM COMPONENT
		// Use of axios library to fetch data from an API to make a GET request to retrieve all todos from the server
		// async function axiosMyAPI() {
		// 	let res = await axios.get('http://localhost:4200/api/todos');
		// 	console.log(res.data);
		// 	dispatch(setInitialState(res.data));
		// }
		// call the async function immediately when component mounts
		// axiosMyAPI();

		// WAY 1 FETCH CALL API & DISPATCH FROM COMPONENT
		// Use of fetch to  make an API request in JavaScript
		// async function fetchMyAPI() {
		// 	let response = await fetch('http://localhost:4200/api/todos');
		// 	let parsedJson = await response.json();
		// 	console.log(parsedJson);
		// }
		// call the async
		// fetchMyAPI();
	}, []);

	return (
		<div className='container'>
			<ul>
				{todos.map((todo, index) => (
					<li key={todo.id}>
						<span className='content'>{todo.text}</span>
						<span className={todo.completed ? 'completed' : 'pending'}>
							{todo.completed ? 'Completed' : 'Pending'}
						</span>
						<button
							className='btn btn-warning'
							onClick={() => {
								dispatch(toggle(index));
							}}
						>
							Toggle
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
