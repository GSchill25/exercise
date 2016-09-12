import React from 'react';

const VideoDetail = ({video}) => {
	if(!video) {
		return <div> None Selected </div>
	}
	
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`; //use backticks for string interpolation

	return (
		<div className="col s12">
		  <div className="">
		  	<iframe width="260" height="162" className="embed-responsive-item" src={url}></iframe>
		  </div>
		</div>
	);
};

export default VideoDetail;
