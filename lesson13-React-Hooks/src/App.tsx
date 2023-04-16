import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from "react";
import "./App.css";

interface User {
  id: number;
  username: string;
}

// Fibonacci

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
};

const myNumber: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);

  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("Mounting");
    console.log("Users", users);

    return () => console.log("unmounting");
  }, [users]);

  // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  );

  //  useMemo will only recompute the memoized value when one of the deps has changed.

  const result = useMemo<number>(() => fib(myNumber), [myNumber]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </>
  );
}

export default App;
