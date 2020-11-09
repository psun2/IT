import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  // onClick: () => void; // onClick 은 함수 type 인데 아무런 parameter () 를 받지 않고
  // 아무런 값을 반환하지 않습니다.(void)
  onClick: (name: string) => void;

  // function 키워드 사용시 children 을 설정 해주어야 사용 가능합니다.
  children?: React.ReactNode;
};

// function key word 로 작성시 default props 가 제대로 작동 합니다.
function GreetingsFunction({
  name,
  mark,
  optional,
  onClick,
  children,
}: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

GreetingsFunction.defaultProps = {
  mark: '!',
};

export default GreetingsFunction;
