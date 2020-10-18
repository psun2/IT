import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

// colorStyles 는 무조건 작동하기 때문에 outline 과 fullWidth 를 줍니다.
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
      /* outline */
      ${({ outline }) =>
        outline &&
        css`
          color: ${seleted};
          background: none;
          border: 1px solid ${seleted};
          &:hover {
            background-color: ${seleted};
            color: white;
          }
          &:active {
            background-color: ${darken(0.1, seleted)};
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '3rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  /* 크기 */
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const fullWidthStyle = css`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
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

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  /* 크기 */
  /* ${(props) =>
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `} */

  ${sizeStyles}

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

 ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;
