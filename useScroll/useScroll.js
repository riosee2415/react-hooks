export const useSroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  });

  const onScroll = () => {
    setState({
      y: window.scrollY,
      x: window.scrollX
    });

    console.log(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};
