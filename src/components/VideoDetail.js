import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Awaiting user input...</div>
  }

  const vidSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          id="ytplayer"
          title="video player"
          src={vidSrc}
          frameborder="0"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          <span dangerouslySetInnerHTML={{ __html: video.snippet.title }}></span>
        </h4>
        <p><span dangerouslySetInnerHTML={{ __html: video.snippet.description }}></span></p>
      </div>
    </div>
  )
};

export default VideoDetail;