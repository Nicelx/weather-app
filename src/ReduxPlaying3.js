import { createStore } from 'redux';
const initialState = {
	value: 0
}

const rootReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD' : return {
				...state,
				value :state.value + 1}
		break;
		case 'SUB' : return {
			...state,
			value : state.value - 1
		}
		
			break;
		default : return state
	}

}

const add = () => {
	return {
		type: 'ADD',
	}
}
const sub = () => {
	return {
		type: 'SUB',
	}
}

const store = createStore(rootReducer)

store.dispatch(add())
store.dispatch(add())
store.dispatch(add())
console.log(store.getState())

const ReduxPlaying3 = () => {
	console.log(store.getState())
	return <div>
		<button onClick = {() => store.dispatch(add())}>+</button>
		<button onClick = {() => store.dispatch(sub())}>-</button>
		<span>{store.getState().value}</span>
	</div>
}
export default ReduxPlaying3