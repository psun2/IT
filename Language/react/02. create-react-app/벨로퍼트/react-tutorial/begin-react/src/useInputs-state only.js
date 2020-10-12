import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  // parameter로 받아온것을 사용 하는 중이니 deps 배열에 넣어 줍니다.

  return [form, onChange, reset];
}

export default useInputs;
