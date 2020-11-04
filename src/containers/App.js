import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import Scroll from '../components/Scroll';
import useVideos from '../hooks/useVideos';


const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('current news');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onFormSubmit={search} searchLabel="Enter Video to Search for:" />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <Scroll resetWatch={videos}>
              <VideoList
                onVideoSelect={setSelectedVideo}
                videos={videos} />
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;;