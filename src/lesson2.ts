// Lesson 2
//-------------------------------------------Data type

let myName: string;
let meaningOfLife: number;
let isLoading: boolean;
//let album = any
let album: string | number;

// // union types   = number | boolean | string

myName = "Payal";
meaningOfLife = 42;
isLoading = false;
album = "Van Halen";
album = 42;

const sum = (a: number, b: string) => {
  return a + b;
};

let postId: string | number;
let isActive: number | boolean | string;

let re: RegExp = /\w+/g;
