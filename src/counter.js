
export default function MyApp() {

  const [count, setCount] = useState(() => {
  const c = localStorage.getItem("count");
  return c !== null ? parseInt(c) : 0;
});

  useEffect(()=>
  {localStorage.setItem("count",count)}
    ,[count]);

  function handleDecrement()
  {
    setCount(prev => prev-1);
  }

  function handleIncrement()
  {
    setCount(prev => prev+1);
  }

  return (

    <div>
      <h1>React Interview challenge</h1>
      <h3>#1 Counter App</h3>
      <button className="decrementBtn" onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button className="incrementBtn" onClick={handleIncrement}>+</button>
    </div>
  );
}
