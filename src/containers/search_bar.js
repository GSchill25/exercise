import React, { Component } from 'react';
//same as const Component = React.Component

class SearchBar extends Component { //give this class all React.Component functions and properties
  constructor(props) {
  	super(props);

  	this.state = { term: '' }; //only class based components have state (not functional components)
  }
  render() { //same as render: function() after transpiled by babel from ES6 to ES5
    return <div className="search-bar">
    	<input value={this.state.term}
      placeholder="Search Exercise"
    	onChange={event => this.onInputChange(event.target.value)} />
    </div>
  } //component instantly rerenders when state changes

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
