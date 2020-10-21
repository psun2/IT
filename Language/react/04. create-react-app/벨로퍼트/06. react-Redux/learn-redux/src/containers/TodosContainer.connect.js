import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainerConnect = ({ todos, addTodo, toggleTodo }) => {
  // const todos = useSelector((state) => state.todos);
  // const dispatch = useDispatch();

  // const onCreate = useCallback((text) => dispatch(addTodo(text)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggleTodo(id)), [dispatch]);

  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

// dispatch 가져오기 방법1.
// const mapDispatchToProps = (dispatch) => ({
//   onCreate: (text) => dispatch(addTodo(text)),
//   onToggle: (id) => dispatch(toggleTodo(id)),
// });

// dispatch 가져오기 방법2.
// const mapDispatchToProps = (dispatch) =>
// bindActionCreators(
//   {
//     addTodo,
//       toggleTodo,
//     },
//     dispatch,
//     );

// dispatch 가져오기 방법3.
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

// 함수 작성없이 export 에서 바로 내보내 주어도 됩니다.
export default connect((state) => ({ todos: state.todos }), {
  addTodo,
  toggleTodo,
})(TodosContainerConnect);
