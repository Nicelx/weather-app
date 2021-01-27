import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
		data : null
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
		saveData : (state,action) => {
			state.data = action.payload
		}
	},
});

export const { increment, decrement, incrementByAmount, saveData} = slice.actions;

export const incrementAsync = (amount) => (dispatch) => {
	setTimeout(() => {
		dispatch(incrementByAmount(amount));
	}, 1000);
};

export const getData = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json())
		.then(json => dispatch(saveData(json)))
}
export const addAsync = (some) => dispatch => {
	console.log('in addAsync')
	setTimeout(() => {
		dispatch(saveData(some))
	},1000)
}

export const selectCount = (state) => state.counter.value;
export const selectData = state => state.counter.data

export default slice.reducer;
