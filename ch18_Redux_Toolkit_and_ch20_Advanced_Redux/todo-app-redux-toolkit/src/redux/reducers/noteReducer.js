const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	notes: [
		{
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam',
			createdOn: new Date().toDateString(),
		},
		{
			text: 'Aliquam erat volutpat. Ut tincidunt, velit vel aliquam commodo, tellus urna auctor tortor, non ultrices libero ante sed magna.',
			createdOn: new Date().toDateString(),
		},
	],
};

// Creating noteReducer using Redux Toolkit
const noteSlice = createSlice({
	name: 'note',
	initialState: initialState,
	reducers: {
		// this is add action
		add: (state, action) => {
			state.notes.push({
				text: action.payload,
				createdOn: new Date().toDateString(),
			});
		},
		// this is delete action
		delete: (state, action) => {
			state.notes.splice(action.payload, 1);
		},
	},
});

// Reducer
export const noteReducer = noteSlice.reducer;
//  Action Creators
export const actions = noteSlice.actions;
// export selector
export const noteSelector = (state) => state.noteReducer.notes;
