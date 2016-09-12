import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchExercise } from '../actions/index';
import Select from 'react-select';
import VideoModal from '../containers/video_modal';

var options = [
	    { value: 'lift', label: 'Lift/Exercise' },
	    { value: 'run', label: 'Run' },
	    { value: 'warmup', label: 'Warmup' },
	    { value: 'stretch', label: 'Stretch' }
	];

class ExerciseForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			type: '',
			name: '',
			sets: '',
			reps: '',
			description: '',
			video: null
		 };

		this.onSelectChangeType = this.onSelectChangeType.bind(this);
		this.onInputChangeName = this.onInputChangeName.bind(this);
		this.onInputChangeSets = this.onInputChangeSets.bind(this);
		this.onInputChangeReps = this.onInputChangeReps.bind(this);
		this.onInputChangeDescription = this.onInputChangeDescription.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onVideoAdded = this.onVideoAdded.bind(this);
	}

	//I'm 99.98% sure this can be refactored, maybe pass an input name?
	onInputChangeName(event) {
		this.setState({ name: event.target.value });
	}

	onInputChangeSets(event) {
		this.setState({ sets: event.target.value });
	}

	onInputChangeReps(event) {
		this.setState({ reps: event.target.value });
	}

	onInputChangeDescription(event) {
		this.setState({ description: event.target.value });
	}

	onSelectChangeType(event) {
		this.setState({ type: event });
	}

	onAddVideoClick(event) {
		event.preventDefault();
		$('.modal-trigger').leanModal();
	}

	onVideoAdded() {
		if(this.refs.videoModal.state.selectedVideo != null) {
			this.setState({ video: this.refs.videoModal.state.selectedVideo })
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		//stop normal submit and fetch exercise data
		this.props.fetchExercise(this.state);
		this.setState({
			type: '',
			name: '',
			sets: '',
			reps: '',
			description: '',
			video: null
		});
	}

	renderSetsAndRepsInputs() {
		if(this.state.type == 'lift' || this.state.type == '') {
		  return(
		  	<div className="col s12">
				<div className="input-field col s3">
					<label className="active" htmlFor="inputSets">Sets </label>
						<input 
						  id="inputSets"
						  placeholder="3"
						  value={this.state.sets}
						onChange={this.onInputChangeSets} />
				</div>

				<div className="col s3 offset-s1">
					<i className="small material-icons">trending_flat</i>
				</div>

				<div className="input-field col s3 offset-s1">
					<label className="active" htmlFor="inputReps">Reps </label>
						<input 
						  id="inputReps"
						  placeholder="5"
						  value={this.state.reps}
						onChange={this.onInputChangeReps} />
				</div>
			</div>
		  );
		} else {
			return (
				<div className="col s2 offset-s3"><i className="medium material-icons">import_export</i></div>
			);
		}
	}

	render() {
		return (
		  <div>
		  <div className="card grey lighten-5 col s4">
            <div className="card-content black-text">
              <span className="card-title">Add Exercise</span>
				<form onSubmit={this.onFormSubmit} className="col s12">

				    <div className="input-field col s12">
				        <label className="active" htmlFor="select-type">Acitivity Type</label>
					    <Select
						  name="select-type"
						  value={this.state.type}
						  options={options}
						  placeholder="Choice Activity Type.."
						  onChange={this.onSelectChangeType}/>
					</div>
					
				    <div className="input-field col s12">
						   <input 
						   id="inputName"
						   placeholder="Dumbell Flys"
						   value={this.state.name}
						   onChange={this.onInputChangeName} />
						<label className="active" htmlFor="inputName">Name</label>
					</div>

					{ this.renderSetsAndRepsInputs() }

					<div className="input-field col s12">
					   <label className="active" htmlFor="inputDescription">Description</label>
					   <textarea 
					   id="inputDescription"
					   placeholder="Perform this exercise by..."
					   className="materialize-textarea"
					   value={this.state.description}
					   onChange={this.onInputChangeDescription} />
					</div>

					<div className="video-btn">
					  <button 
					  onClick={this.onAddVideoClick} 
					  type="button"
					  //data-target="videoModal"
					  href="#videoModal"
					  className="btn btn-info btn-circle modal-trigger"><i className="material-icons">video_library</i></button>
					</div>

					<div className="exercise-btn">
					  <button type="submit" className="btn btn-info btn-circle"><i className="material-icons">queue</i></button>
					</div>
				</form>
			</div>
		  </div>
		  <VideoModal ref="videoModal" changeHandler={this.onVideoAdded}  />
		  </div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchExercise}, dispatch); //bind to action creator
}

export default connect(null, mapDispatchToProps)(ExerciseForm);

//USE FAT ARROW FUNCTIONS TO PASS THE VALUE OF 'this' or bind the function in constructors...
//Need to bind the context when using callbacks...
