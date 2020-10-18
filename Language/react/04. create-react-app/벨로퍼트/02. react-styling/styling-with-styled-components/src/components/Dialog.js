import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './Button';

const fadeIn = keyframes`
  from{
  opacity: 0;
  } to {
  opacity: 1;
  }
`;

const fadeOut = keyframes`
  from{
  opacity: 1;
  } to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  } to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  } to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background-color: #f2f2f2;
  border-radius: 2px;

  /* h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  } */

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}
`;

const DialogTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

const DialogContent = styled.p`
  font-size: 1.125rem;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

// 컴포넌트를 상속 받아 새로운 컴포넌트 생성
const ShortMarginButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onConfirm,
  onCancel,
}) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);
  // 모달을 보여주는 클릭 evnet 가 실행되면 app 에서 관리 하는 상태인 visible이 오게되고
  // 모달이 보여지게 되면서 fadeIn 과 slideUp 이 동작되며...(css 에 기본적인 스타일링으로 지정)
  // onCancel 버튼을 누르게 되면 visible 이 false 로 변경되면서
  // 컴포넌트가 재 랜더링 되면서
  // 이전에 disappear(사라지다) 는 이전 false 에서 true 로 바뀌게 되면서
  // 이전 애니메이션 css에 다른 애니메이션 css 를 덮어 씌우므로써 그 css 의 동작이 완성 됩니다.
  // 그래서 바뀐 동작은 fadeOut 과 slideDown 이 발생됩니다.

  useEffect(() => {
    // visible true => false
    if (localVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    setLocalVisible(visible);
  }, [visible, localVisible]);

  if (!localVisible && !animate) return null;

  return (
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        {/* <h3>{title}</h3>
        <p>{children}</p> */}
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <ButtonGroup>
          <ShortMarginButton color="gray" onClick={onCancel}>
            {cancelText}
          </ShortMarginButton>
          <ShortMarginButton color="pink" onClick={onConfirm}>
            {confirmText}
          </ShortMarginButton>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
};

export default Dialog;
