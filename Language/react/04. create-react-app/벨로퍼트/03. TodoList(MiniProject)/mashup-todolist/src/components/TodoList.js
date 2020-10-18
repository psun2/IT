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
