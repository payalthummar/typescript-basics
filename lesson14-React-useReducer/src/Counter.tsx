import { ChangeEvent, ReactNode, useReducer } from "react";

// initialize state

const initialState = { count: 0, text: "" };

// declare type

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

// action

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

// Reducer function

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };

    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

export default function Counter({ children }: ChildrenType) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };
  return (
    <>
      <h1> {children(state.count)} </h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" onChange={handleTextInput} />
        <h2>{state.text}</h2>
      </div>
    </>
  );
}
