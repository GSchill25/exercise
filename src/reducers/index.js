import { combineReducers } from 'redux';
import ExerciseReducer from './reducer_exercise';

const rootReducer = combineReducers({
  exercise: ExerciseReducer
});

export default rootReducer;
