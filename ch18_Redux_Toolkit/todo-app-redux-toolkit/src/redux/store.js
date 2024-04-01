import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducer.js';

export const store = configureStore({
	reducer: {
		todoReducer,
		noteReducer,
	},
});
