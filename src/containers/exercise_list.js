import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoTableDetail from '../containers/video_table_detail';
//import ExerciseBlock from '../components/exercise_block';

class ExerciseList extends Component {

	renderExercise(exerciseData) { //render a single exercise, single row
	  return (
	  	<tr key={exerciseData.name}>
	  	  <td width="100"> {exerciseData.type.toUpperCase()} </td>
	  	  <td width="140"> {exerciseData.name} <br></br> {exerciseData.sets} x {exerciseData.reps} </td>
	  	  <td width="20"></td>
	  	  <td className="justify-left" width="300"> {exerciseData.description} </td>
	  	  <td width="200"><VideoTableDetail video={exerciseData.video} /></td>
	  	</tr>
	  	 //<td><Chart data={temps} color="red" /></td>
	  );
	}

	render() {
		return (
		  <div className="col s8 col">
		  <table className="table highlight">
		    <thead>
		      <tr>
		        <th width="100">Type</th>
		        <th width="140">Name</th>
		        <th width="20"></th>
		        <th width="300">Description</th>
		        <th width="200">Video</th>
		      </tr>
		    </thead>
		    <tbody>
		      {this.props.exercise.map(this.renderExercise)}
		    </tbody>
		  </table>
		  </div>
		);
	}
}

function mapStateToProps({ exercise }) { //could pass in "state" but using some sugar
	return { exercise }; //weather reducer assigned to "exercise" key on state
	//same as { exercise: exercise }
}

export default connect(mapStateToProps)(ExerciseList);