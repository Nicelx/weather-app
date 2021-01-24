import React, { useState } from "react";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { value: 0, data: null };
const store = configureStore({ reducer: counterReducer });

// {value: 0}

function counterReducer(state = initialState, action) {
	// Check to see if the reducer cares about this action
	if (action.type === "counter/increment") {
		// If so, make a copy of `state`
		return {
			...state,
			// and update the copy with the new value
			value: state.value + 1,
		};
	}

	if (action.type === 'fetch') {
		return {
			...state,
			data: state.payload
		}
	}
	// otherwise return the existing state unchanged
	return state;
}

const increment = () => {
	return {
		type: "counter/increment",
	};
};

const getData = () => {
	let data;
	fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then((response) => response.json())
		.then((json) => {
			data = json;
		});
	return {
		type: "fetch",
		payload: data
	};
};



const selectCounterValue = (state) => state.value;

// 2

store.dispatch(getData());
store.dispatch(increment());
store.dispatch(increment());

const currentValue = selectCounterValue(store.getState());

console.log(currentValue);

function Counter() {
	// State: a counter value
	const [counter, setCounter] = useState(0);

	// Action: code that causes an update to the state when something happens
	const increment = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	// View: the UI definition
	return (
		<div>
			Value: {counter} <button onClick={increment}>Increment</button>
		</div>
	);
}

export default Counter;

// let result;

// const state = {
// 	todos: [{
// 	  text: 'Eat food',
// 	  completed: true
// 	}, {
// 	  text: 'Exercise',
// 	  completed: false
// 	}],
// 	visibilityFilter: 'SHOW_COMPLETED'
//   }

//   const addtodo = { type: 'ADD_TODO', text: 'Go to swimming pool' }
// 	const togle =	{ type: 'TOGGLE_TODO', index: 1 }
// 	const setV = 	{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }

// function visibilityFilter(state = 'SHOW_ALL', action) {
// 	console.log('here')
// 	if (action.type === 'SET_VISIBILITY_FILTER') {
// 	  return action.filter
// 	} else {
// 	  return state
// 	}
//   }

//   function todos(state = [], action) {
// 	switch (action.type) {
// 	  case 'ADD_TODO':
// 		return state.concat([{ text: action.text, completed: false }])
// 	  case 'TOGGLE_TODO':
// 		return state.map((todo, index) =>
// 		  action.index === index
// 			? { text: todo.text, completed: !todo.completed }
// 			: todo
// 		)
// 	  default:
// 		return state
// 	}
//   }

//   result = todos([2,3,4],addtodo )

//   function todoApp(state = {}, action) {
// 	return {
// 	  todos: todos(state.todos, action),
// 	  visibilityFilter: visibilityFilter(state.visibilityFilter, action)
// 	}
//   }

//   console.log(result)
