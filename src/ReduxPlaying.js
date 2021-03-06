import React from 'react';
// import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
	  value: 0
	},
	reducers: {
	  incremented: state => {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the Immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes
		state.value += 1
	  },
	  decremented: state => {
		state.value -= 1
	  }
	}
  })

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
	reducer: counterSlice.reducer
  })
  
  // Can still subscribe to the store
  store.subscribe(() => console.log(store.getState()))
  
  // Still pass action objects to `dispatch`, but they're created for us
  store.dispatch(incremented())
  // {value: 1}
  store.dispatch(incremented())
  // {value: 2}
  store.dispatch(decremented())
  // {value: 1}


const ReduxPlaying = () => {

	// function counterReducer(state = { value: 0 }, action) {
	// 	switch (action.type) {
	// 	  case 'counter/incremented':
	// 		return { value: state.value + 1 }
	// 	  case 'counter/decremented':
	// 		return { value: state.value - 1 }
	// 	  default:
	// 		return state
	// 	}
	//   }
	//   let store = createStore(counterReducer)
	//   store.subscribe(() => console.log(store.getState()))
	//   store.dispatch({ type: 'counter/incremented' })
	//   store.dispatch({ type: 'counter/incremented' })
	//   store.dispatch({ type: 'counter/incremented' })


	
	return (
		<>
		</>
	);
};

export default ReduxPlaying;