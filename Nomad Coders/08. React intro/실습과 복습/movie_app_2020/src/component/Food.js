import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h3>I Like {name}</h3>
      <img src={picture} alt={name} />
    </div>
  );
}

export default Food;
