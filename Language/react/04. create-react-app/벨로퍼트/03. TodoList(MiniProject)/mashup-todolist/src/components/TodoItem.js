import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoContext';

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced3da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  ${({ done }) =>
    done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex-grow: 1;
  font-size: 21px;
  color: #495057;
  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();

  const onToggle = () => {
    const action = {
      type: 'TOGGLE',
      id,
    };
    dispatch(action);
  };

  const onRemove = () => {
    const action = {
      type: 'REMOVE',
      id,
    };
    dispatch(action);
  };

  return (
    // 구조: TodoItemBlock[circle    text    remove]
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete onClick={onRemove} />
      </Remove>
    </TodoItemBlock>
  );
};
export default memo(TodoItem);
