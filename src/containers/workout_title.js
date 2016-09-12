import React, { Component } from 'react';

export default class WorkoutTitle extends Component {
	constructor(props) {
		super(props);

		this.state = {term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.setState({term: 'Update with an Action Creator'});
	}

	render() {
		return (
			<div className="row">
				<div className="workout-title col s4 offset-s4">
				  <form onSubmit={this.onFormSubmit}>
				    <div className="col s10">
				    <input 
				     placeholder="My Workout"
				     value={this.state.term}
				     onChange={this.onInputChange} />
				    </div>
				    <div className="col s2">
				    <span className="input-group-btn">
				      <button type="submit" className="btn btn-secondary">Save</button>
				    </span>
				    </div>
				  </form>
				</div>
			</div>
		);
	}
}

//function mapDispatchToProps(dispatch) {
//	return bindActionCreators({fetchWeather}, dispatch); //bind to action creator
//}

//export default connect(null, mapDispatchToProps)(SearchBar);

//USE FAT ARROW FUNCTIONS TO PASS THE VALUE OF 'this' or bind the function in constructors...
//Need to bind the context when using callbacks...