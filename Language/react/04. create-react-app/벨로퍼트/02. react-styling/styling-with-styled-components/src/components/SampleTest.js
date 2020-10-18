import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  ${({ color }) =>
    css`
      background: ${color};
    `}
`;

console.log(Button);

export default function SampleTest() {
  const [color, setColor] = useState('blue');
  const onClick = () => {
    setColor((color) => {
      console.log('색변경');
      if (color === 'blue') return 'red';
      return 'blue';
    });
  };
  console.log(color);
  return (
    <div className="App">
      <Button onClick={onClick} color={color}>
        하이
      </Button>
    </div>
  );
}
