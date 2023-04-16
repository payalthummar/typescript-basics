// Lesson 3
// ----------------------------------------Objects & Arrays & Tuples | Enums

// string[]
let stringArray = ["one", "two", "three"];

// (string | number)[]
let guitars = ["Strat", "Les Paul", 5150];

// (string | number | boolean)[]
let mixedData = ["Evh", 1994, true];

stringArray[0] = "John";
stringArray.push("hey");

guitars[0] = 1987;
guitars.unshift("jim");

guitars = stringArray;

mixedData = guitars;

// any[]
let testData = [];

let bands: string[] = [];
bands.push("Hi");

// Tuple

let myTuple: [string, number, boolean] = ["Payal", 29, true];

// (string | number | boolean)[]
let mixed = ["Payal", , true];

// Objects

let myObj: object;

myObj = [];

console.log(typeof myObj);

myObj = bands;

myObj = {};

const exampleObj = {
  prop1: "Payal",
  prop2: true,
};

exampleObj.prop1 = "Hi";

// type object or interface

// type Guitarist = {
//   name: string;
//   active?: boolean; // optional boolean or undefined
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: string;
  active?: boolean; // optional boolean or undefined
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Payal",
  active: true,
  albums: [1999, 1908, "OU234"],
};

let JP: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["1", "2", "5"],
};

evh = JP;

// function

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return `Hello!`;
};

console.log(greetGuitarist(JP));

// Enum

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
