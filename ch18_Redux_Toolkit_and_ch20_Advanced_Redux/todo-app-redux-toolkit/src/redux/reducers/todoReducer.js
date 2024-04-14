import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// Initial State
const initialState = {
	todos: [],
};

// AsyncThunk Function  to fetch todos from the API to restore initial  state on app load.
export const getInitialState = createAsyncThunk(
	//  `createAsyncThunk` function takes two arguments -
	// first is a string that represents action type and will be used for Redux actions types
	'todo/getInitialState',
	() => {
		return axios.get('http://localhost:4200/api/todos');
	}

	// OR

	// (arg, thunkAPI) => {
	// 	axios.get('http://localhost:4200/api/todos').then((res) => {
	// 		console.log(res.data);
	// 		// dispatch setInitialState action with data from server
	// 		thunkAPI.dispatch(setInitialState(res.data));
	// 	});
	// }
);

export const addTodoAsync = createAsyncThunk(
	'todo/addTodo',
	async (payload) => {
		const response = await fetch('https://dummyjson.com/todos/add', {
			method: 'POST',
			headers: 'application/json',
			body: { text: payload, completed: false },
		});
		return response.json();
	}
);

// Creating todoReducer using ReduxToolkit
const todoSlice = createSlice({
	name: 'todo',
	initialState: initialState,
	reducers: {
		// used in line 25
		// setInitialState: (state, action) => {
		// 	state.todos = [...action.payload];
		// },
		// this is add action
		add: (state, action) => {
			state.todos.push({
				text: action.payload,
				completed: false,
			});
		},
		// this is toggle action
		toggle: (state, action) => {
			state.todos.map((todo, i) => {
				if (i === action.payload) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getInitialState.fulfilled, (state, action) => {
				console.log('getInitialState id fulfilled');
				console.log(action.payload);
				state.todos = [...action.payload.data];
			})
			.addCase(addTodoAsync.fulfilled, (state, action) => {
				console.log(action.payload);
				state.todos.push(action.payload);
			});
	},
});

// Reducer
export const todoReducer = todoSlice.reducer;
// Actions
export const { setInitialState, add, toggle } = todoSlice.actions;
// export selector
export const todoSelector = (state) => state.todoReducer.todos;
