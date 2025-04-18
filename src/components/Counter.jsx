import useStore from "../store";

export const Counter = () => {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
