import axios from 'axios';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// Initial State
const initialState = {
	todos: [],
};

// AsyncThunk Function  to fetch todos from the API
export const getInitialState = createAsyncThunk(
	'todo/getInitialState',
	(arg, thunkAPI) => {
		axios.get('http://localhost:4200/api/todos').then((res) => {
			console.log(res.data);
			// dispatch setInitialState action with data from server
			thunkAPI.dispatch(setInitialState(res.data));
		});
	}
);

// Creating todoReducer using ReduxToolkit
const todoSlice = createSlice({
	name: 'todo',
	initialState: initialState,
	reducers: {
		setInitialState: (state, action) => {
			state.todos = [...action.payload];
		},
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
});

// Reducer
export const todoReducer = todoSlice.reducer;
// Actions
export const { setInitialState, add, toggle } = todoSlice.actions;
// export selector
export const todoSelector = (state) => state.todoReducer.todos;
