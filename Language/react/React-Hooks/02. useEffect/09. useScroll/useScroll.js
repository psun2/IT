export const useScroll = () => {
  const [state, Setstate] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    console.log(`x: ${window.scrollX}, y: ${window.scrollY}`);

    Setstate({ x: window.scrollY, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};
