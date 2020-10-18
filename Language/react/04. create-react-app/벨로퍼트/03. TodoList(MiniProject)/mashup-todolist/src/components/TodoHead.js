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
