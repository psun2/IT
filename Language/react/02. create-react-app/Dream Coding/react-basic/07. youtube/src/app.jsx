import React, { useState, useEffect } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&q=원피스&key=AIzaSyCaaKn_W5Ei05EwtBgcpLKPUaVwhsUX0pE',
      requestOptions,
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);
  return <VideoList videos={videos} />;
};

export default App;
