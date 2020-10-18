import React from 'react';
import axios from 'axios';

// [참고]
// IT/Language/react/04. create-react-app/Dream Coding/react-basic/09. card-maker/src/service/image_uploader.js
// IT/Language/react/04. create-react-app/Dream Coding/react-basic/09. card-maker/src/index.js

// const httpClient = axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
//     params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
//   });

const httpClient = () => {
  const result = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'GET',
  });
  console.log(result);
  return result;
};

const getData = async () => {
  const client = httpClient();

  const response = await client('/users');

  console.log(response.data);
};

const AxiosTest = (props) => {
  getData();
  // httpClient();

  return <div>Axios Test</div>;
};

export default AxiosTest;
