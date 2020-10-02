import React from 'react';
import './app.css';

function App() {
  // return React.createElement('h1', {}, 'Hello :) !!');
  // const name = 'park';
  const name = undefined;
  return (
    <React.Fragment>
      <h1>Hello</h1>
      {name && (
        <h1 className="title" onClick="">
          Hello! {name} :)
        </h1>
      )}
      {/* // JSX 는 형제 노드를 사용할 수 없습니다.  */}
      {/* // 둘 이상의 태그는 반드시 하나의 태그로 감싸 주어야 합니다. */}
      {['💛', '🍎'].map((imte) => (
        <h1>{imte}</h1>
      ))}
    </React.Fragment>
    // React.Fragment 또는 <> 아무것도 없는 태그로 감싸줍니다.
    // 여기서 주의하실점은 inspect 검사 즉, Element 검사를 하게 되면
    // React.Fragment 나 <> 빈태그는 나타나지 않습니다.
    // ❗ 만약 style을 위해서라면 div 태그로 감싸주시는게 좋습니다.
  );
}

export default App;
