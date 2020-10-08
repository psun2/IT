import React from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const Profile = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  console.log(props); // {};

  return (
    <>
      <h1> Profile</h1>
      <button onClick={() => history.push('/')}>Go to Home</button>
    </>
  );
};

export default Profile;
