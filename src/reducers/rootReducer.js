import initialState from './initialState';

export default function rootReducer (state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT' : 
			return {
				count : state.count + 1,
			};
		case 'ONC' :
			return {
				count : state.count + 100,
			}
		default : 
			return state;
	}
}