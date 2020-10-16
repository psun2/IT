import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
  /* 색상  */
  ${({ theme, color }) => {
    const seleted = theme.palette[color];
    return css`
      background-color: ${seleted};
      &:hover {
        background-color: ${lighten(0.1, seleted)};
      }
      &:active {
        background-color: ${darken(0.1, seleted)};
      }
    `;
  }}
`;

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

  /* 함수 화 코드 사용 전 색상 코드
  background-color: #288be6; ThemeProvider 사용 전 코드
  background-color: ${(props) => props.theme.palette.blue};
  &:hover {
    background-color: #339af0; polished 함수 사용전 코드
    background-color: ${lighten(0.1, '#288be6')}; ThemeProvider 사용 전 코드
    background-color: ${(props) => lighten(0.1, props.theme.palette.blue)};
  }
  &:active {
    background-color: #1c7ed6; polished 함수 사용전 코드
    background-color: ${darken(0.1, '#288be6')}; ThemeProvider 사용 전 코드
    background-color: ${(props) => darken(0.1, props.theme.palette.blue)};
  } */

  /* 색상 - styled-components 밖으로 내보 낼 수 도 있습니다. */
  /* ${({ theme, color }) => {
    const seleted = theme.palette[color];
    return css`
      background-color: ${seleted};
      &:hover {
        background-color: ${lighten(0.1, seleted)};
      }
      &:active {
        background-color: ${darken(0.1, seleted)};
      }
    `;
  }} */

  /* 색상 */
  ${colorStyles}

  /*
    &(자신) +(형제 노드) &(자신)
    즉 버튼끼리 붙어 있다면 오른쪽 버튼에 스타일링을 하는 문법 입니다.
  */

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

function Button({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
};

export default Button;
