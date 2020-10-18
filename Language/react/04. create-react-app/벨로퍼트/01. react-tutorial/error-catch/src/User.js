import React from 'react';

const User = ({ user }) => {
  //  if (!user) return null;
  // 기본적으로 코드에서 예외처리 해줌을 원칙으로 하지만...
  // 만약에 에러가 발생했다면... 개발자의 에러캐치와 사용자에게
  // 에러가 발생했음을 알려 주어야 합니다.

  // 에러의 원인 props으로 받아오는 user가 넘어오지 않아 에러 페이지가 나타나는데
  // 이는 개발서버에서 생성해주는 메시지 이며, 사용 자는 에러페이지 를 껏을때 나타나는
  // 빈 페이지만 보여 당황 스럽습니다.
  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username</b>: {user.username}
      </div>
    </div>
  );
};

export default User;
