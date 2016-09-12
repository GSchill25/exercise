export const FETCH_EXERCISE = 'FETCH_EXERCISE';

export function fetchExercise(exercise) {
	return {
		type: FETCH_EXERCISE,
		payload: exercise
	};
}