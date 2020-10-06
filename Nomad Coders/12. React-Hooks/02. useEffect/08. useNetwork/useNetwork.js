export const useNetwork = (onChange) => {
  if (typeof onChange !== 'function')
    return new Error(`${onChange} not a function`);

  const [status, setStatus] = useState(navigator.onLine);

  const handelChange = () => {
    onChange(navigator.onLine);

    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handelChange);
    window.addEventListener('offline', handelChange);

    return () => {
      window.removeEventListener('online', handelChange);
      window.removeEventListener('offline', handelChange);
    };
  }, []);

  return status;
};
