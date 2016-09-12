import React, { Component } from 'react';

import WorkoutTitle from '../containers/workout_title';
import ExerciseForm from '../containers/exercise';
import ExerciseList from '../containers/exercise_list';


export default class App extends Component {

  render() {
    return (
      <div>
      	<WorkoutTitle />
      	<div className="row">
      		<ExerciseForm />
      		<ExerciseList />
      	</div>
      </div>
    );
  }
}
