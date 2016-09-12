import { FETCH_EXERCISE } from '../actions/index';


export default function(state = [], action) {
	switch (action.type) {
	case FETCH_EXERCISE:
	  return [ action.payload, ...state ]; // [exercise, exercise, exercise]
	}
	return state;
} 
