import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search'; //will need to update to real youtube search to return 10-15 videos
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';


const API_KEY = 'AIzaSyAO2nokdBnpRGDa513zb_ekBGkFpyzr1f8';



export default class VideoModal extends Component {
  constructor(props) {
  	super(props);

  	this.state = { 
			videos: [],
			selectedVideo: null
		 };
	this.videoSearch('bench press');

	this.onClickAddSelectedVideo = this.onClickAddSelectedVideo.bind(this);
  }

  onClickAddSelectedVideo(event) {
  	this.props.changeHandler(); //call function in parent component (exercise.js)
  }

  videoSearch(term) {
		YTSearch({ key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			}); 
		});
  }

  render() {
  	const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      	<div id="videoModal" className="modal bottom-sheet">
      	  <div className="modal-content">
      		<SearchBar onSearchTermChange={videoSearch} />
		    <VideoDetail video={this.state.selectedVideo} />
		    <VideoList 
		      onVideoSelect={selectedVideo => this.setState({selectedVideo})} //function to update state, pass property
		      videos={this.state.videos} />
		  </div>
		  <div className="modal-footer">
		    <a href="#!" onClick={this.onClickAddSelectedVideo} className=" modal-action modal-close waves-effect waves-green btn-flat">Attach Video</a>
		    <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Close</a>
		  </div>
        </div>
    );
  }
}

