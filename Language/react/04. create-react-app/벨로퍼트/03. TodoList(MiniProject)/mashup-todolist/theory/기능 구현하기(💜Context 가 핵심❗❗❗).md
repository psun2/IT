# 기능 구현하기(💜Context 가 핵심❗❗❗)

## TodoContext.js

```
import React, { createContext, useContext, useReducer, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true,
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true,
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false,
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false,
  },
];

/*
    CREATE
    TOGGLE
    REMOVE
*/
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
};

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);

  if (!context) throw new Error('Cannot find TodoProvider');

  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);

  if (!context) throw new Error('Cannot find TodoProvider');

  return context;
};

export const useTodoNextId = () => {
  const context = useContext(TodoNextIdContext);

  if (!context) throw new Error('Cannot find TodoProvider');

  return context;
};
```

---

### TodoHeader.js

```
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }

  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = (props) => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();

  // 날짜 관련
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  console.log(today.toLocaleDateString()); // 2020. 10. 17.
  console.log(today.toLocaleTimeString()); // 오후 11:06:33

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;

{
  /* <TodoHeadBlock>
<h1>
  {new Date().getFullYear()}년 {new Date().getMonth() + 1}월&nbsp;
  {new Date().getDate()}일
</h1>
<div className="day">
  {['일', '월', '화', '수', '목', '금'][new Date().getDay() - 1]}요일
</div>
<div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
</TodoHeadBlock> */
}
```

---

### TodoList.js

```
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex-grow: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </TodoListBlock>
  );
};
export default TodoList;
```

---

### TodoItem.js

```
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
```

---

### TodoCreate.js

```
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
```
