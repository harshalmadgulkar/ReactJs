const { createSlice } = require('@reduxjs/toolkit');

// Initial State
const initialState = {
	todos: [
		{ text: 'Go to Gym at 6', completed: false },
		{ text: 'Study at 8', completed: true },
	],
};

// Creating todoReducer using ReduxToolkit
const todoSlice = createSlice({
	name: 'todo',
	initialState: initialState,
	reducers: {
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

export const todoReducer = todoSlice.reducer;
export const actions = todoSlice.actions;

// export selector
export const todoSelector = (state) => state.todoReducer.todos;
