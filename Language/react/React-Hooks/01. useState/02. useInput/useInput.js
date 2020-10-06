// input의 조건에 따른 업데이트 함수

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    console.log(event.target);
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};
