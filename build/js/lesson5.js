"use strict";
// Lesson 5
// convert to more or less specific
let aValue = "hello";
let bValue = aValue; // less specific
let cValue = aValue; // more specific
let dValue = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return " " + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string;
10;
// THE DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
