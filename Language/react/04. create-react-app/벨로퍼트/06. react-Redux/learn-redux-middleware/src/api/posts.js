// const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// // sleep(1000).theb(console.log('hello'));

// // {id, title, body} number, string, string

// const posts = [
//   {
//     id: 1,
//     title: 'redux middleware 를 배워봅시다',
//     body: '리덕스 미들웨어를 직접 만들어보면 이해하기가 쉽죠.',
//   },
//   {
//     id: 2,
//     title: 'redux-thunk를 사용해 봅시다.',
//     body: 'redux-thunk를 사용해서 비동기 작업을 처리해 보아요',
//   },
//   {
//     id: 3,
//     title: 'redux-saga도 사용해 봅시다.',
//     body:
//       '나중에 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼거예요.',
//   },
// ];

// export const getPosts = async () => {
//   await sleep(500);
//   return posts;
// };

// export const getPostById = async (id) => {
//   await sleep(500);
//   //  return posts.filter((post) => post.id === id);
//   return posts.find((post) => post.id === id);
// };

// import axios from 'axios';
// export const getPosts = async () => {
//   const response = await axios.get('http://localhost:4000/posts');
//   return response.data;
// };

// export const getPostById = async (id) => {
//   const response = await axios.get(`http://localhost:4000/posts/${id}`);
//   return response.data;
// };

import axios from 'axios';
export const getPosts = async () => {
  // http://localhost:4000 부분을 지워 줌으로써,
  // 결과적으로 3000으로 요청을 합니다.
  // 요청을 받은 webpack 설정 react 에서는 package.json 으로 설정 된
  // proxy 값으로 요청을 전달하여 결과 적으로 3000 번 포트로 요청을 보내지만,
  // 4000번 포트의 주소로 요청이 전달되어 응답합니다.
  // 💥이때 webpack 개발 서버란 react 가 동작하고 있는 react 서버를 의미 합니다.
  const response = await axios.get('/posts');
  return response.data;
};

export const getPostById = async (id) => {
  // http://localhost:4000 부분을 지워 줌으로써,
  // 결과적으로 3000으로 요청을 합니다.
  // 요청을 받은 webpack 설정 react 에서는 package.json 으로 설정 된
  // proxy 값으로 요청을 전달하여 결과 적으로 3000 번 포트로 요청을 보내지만,
  // 4000번 포트의 주소로 요청이 전달되어 응답합니다.
  // 💥이때 webpack 개발 서버란 react 가 동작하고 있는 react 서버를 의미 합니다.
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
