import React from 'react';

const profileData = {
  park: {
    name: '박',
    description: 'backend',
  },
  hommer: {
    name: '호머심슨',
    description: '심슨 가족에 나오는 아빠 역할 캐릭터',
  },
};

const Profile = ({ match }) => {
  console.log(match);

  const { username, id } = match.params; // 여러 개의 값을 입력 받을 수 있습니다.
  // profile/{username} 으로 들어오며 이때 Params를 받는 것이
  // Route의 내장 props match 입니다.
  console.log(username);

  const profile = profileData[username];
  console.log(profile);

  return (
    <>
      {!profile ? (
        <div>존재 하지 않는 사용자 입니다.</div>
      ) : (
        <div>
          <h3>
            {username} ({profile.name})
          </h3>
          <p>{profile.description}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
