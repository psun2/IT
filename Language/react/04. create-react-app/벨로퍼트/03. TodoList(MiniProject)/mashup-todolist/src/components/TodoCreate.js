import React, { memo, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { lighten, darken } from 'polished';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.button`
  background-color: #38d9a9;

  &:hover {
    /* background-color: #63e6be; */
    background-color: ${lighten(0.1, '#38d9a9')};
  }
  &:active {
    /* background-color: #20c997; */
    background-color: ${darken(0.1, '#38d9a9')};
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 40px;

  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${({ open }) =>
    open &&
    css`
      background-color: #ff6b6b;

      &:hover {
        background-color: ${lighten(0.1, '#ff6b6b')};
      }
      &:active {
        background-color: ${darken(0.1, '#ff6b6b')};
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background-color: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const onToggle = () => setOpen(!open);
  const onChange = (event) => setValue(event.target.value);

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: nextId.current,
      text: value,
      done: false,
    };
    setValue('');
    nextId.current += 1;

    const action = {
      type: 'CREATE',
      todo,
    };
    dispatch(action);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              onChange={onChange}
              value={value}
              placeholder="할 일을 입력 후, Entern 를 누르세요"
              autoFocus
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default memo(TodoCreate);
