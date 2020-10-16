import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 
    & 문법은 sass 와 동일 하지만 sass 는 아니라는 점 참고 해주시기 바랍니다.
  */

  /* 색상 */
  background-color: #288be6;
  &:hover {
    background-color: #339af0;
  }
  &:active {
    background-color: #1c7ed6;
  }

  /*
    &(자신) +(형제 노드) &(자신)
    즉 버튼끼리 붙어 있다면 오른쪽 버튼에 스타일링을 하는 문법 입니다.
  */

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
