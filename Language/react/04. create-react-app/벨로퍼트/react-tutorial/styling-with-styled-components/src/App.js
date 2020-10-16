import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: ${props.huge};
      height: 10rem;
    `}
`;

function App() {
  return (
    <>
      <Circle color="black" />
      <Circle color="blue" huge="10rem" />
    </>
  );
}

export default App;
