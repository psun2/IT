import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

const App = ({ youTube }) => {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youTube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youTube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />;
    </div>
  );
};

export default App;
