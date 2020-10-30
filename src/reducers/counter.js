import initialState from './initialState';

export default function counter (state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT' : 
			return {
				count : state.count + 1,
			};
		default : 
			return state;
	}
}