import React from 'react';

const VideoDetail = ({video}) => {
	if(!video) {
		return <div> Loading...</div>
	}
	
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`; //use backticks for string interpolation

	return (
		<div className="video-detail col s5">
		  <div className="videoWrapper">
		  	<iframe width="560" height="349" className="embed-responsive-item" src={url}></iframe>
		  </div>
		  <div className="details">
		  	<div>{video.snippet.title}</div>
		  </div>
		</div>
	);
};

export default VideoDetail;
