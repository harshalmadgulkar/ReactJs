import { createSlice } from '@reduxjs/toolkit';
import { actions } from './noteReducer';

const INITIAL_STATE = {
	message: '',
};

const notificationSlice = createSlice({
	name: 'notification',
	initialState: INITIAL_STATE,
	reducers: {
		reset: (state, action) => {
			state.message = '';
		},
	},
	extraReducers: {
		[actions.add]: (state, action) => {
			state.message = 'Item Added Successfully!';
		},
	},
	// Hard Coded
	// extraReducers: {
	// 	'todo/add': (state, action) => {
	// 		state.message = `todo item added successfully!`;
	// 	},
	// },

	// Using Builder function
	// extraReducers: (builder) => {
	// 	builder.addCase(actions.add, (state, action) => {
	// 		state.message = `Todo is created successfully!`;
	// 	});
	// },
});

// Reducer
export const notificationReducer = notificationSlice.reducer;
//  Actions
export const resetNotification = notificationSlice.actions.reset;
// Selectors
export const notificationSelector = (state) =>
	state.notificationReducer.message;
