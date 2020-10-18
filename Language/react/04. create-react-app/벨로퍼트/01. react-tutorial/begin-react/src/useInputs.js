import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'RESET':
      return action.initialForm;
    default:
      throw new Error('Unhandled action');
  }
}

function useInputs(initialForm) {
  // const [form, setForm] = useState(initialForm);

  // const onChange = useCallback((event) => {
  //   const { name, value } = event.target;
  //   setForm((form) => ({ ...form, [name]: value }));
  // }, []);

  // const reset = useCallback(() => setForm(initialForm), [initialForm]);
  // parameter로 받아온것을 사용 하는 중이니 deps 배열에 넣어 줍니다.

  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    dispatch({ type: 'CHANGE', name, value });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET', initialForm });
  }, [dispatch, initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
