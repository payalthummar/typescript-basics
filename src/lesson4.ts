// Lesson 4

// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type GuitaristData = {
  name?: string;
  active?: boolean; // optional boolean or undefined
  albums: (string | number)[];
};

type UseId = stringOrNumber;

// Literal types

let myname1: "Payal";

let userName: "Payal" | "Nehal" | "Parth";

userName = "Parth";

// Functions

const add = (a: number, b: number): number => {
  return a + b;
};

// void - functions do not have return statement (side effect)

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 3));

let substract = function (c: number, d: number): number {
  return c - d;
};

logMsg(substract(3, 2));

type mathFunction = (a: number, b: number) => number;

// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

// Error function returns never type

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const inifinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

// custom type guard

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

// use of the never type

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen!");
};
