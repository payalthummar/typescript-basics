import { ReactNode } from "react";
import { useCounter, userCounterText } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

export default function Counter({ children }: ChildrenType) {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = userCounterText();

  return (
    <>
      <h1> {children(count)} </h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" onChange={handleTextInput} />
        <h2>{text}</h2>
      </div>
    </>
  );
}
