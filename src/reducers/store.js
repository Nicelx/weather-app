import { configureStore } from '@reduxjs/toolkit';

const tempReducer = (state = {
	initialState : 'init'
}, action ) => {
	return state;
}

export const store =  configureStore({
	reducer: {
	  temp: tempReducer,
	},
  });
  