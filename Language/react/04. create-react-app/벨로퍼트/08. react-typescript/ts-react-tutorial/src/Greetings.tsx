import React from 'react';

type GreetingsProps = {
  name: string;
  mark?: string;
};

const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => {
  return (
    <div>
      Hello, {name} {mark}
    </div>
  );
};

// type sctipt 로 작석시 defaultProps 가 제대로 동작하지 않습니다.
// mark = '!' 으로 표현해야 제대로 작동합니다.
// Greetings.defaultProps = {
//   mark: '!',
// };

export default Greetings;
