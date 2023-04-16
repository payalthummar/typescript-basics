"use strict";
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
let bands = [];
bands.push("Hi");
// Tuple
let myTuple = ["Payal", 29, true];
// (string | number | boolean)[]
let mixed = ["Payal", , true];
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Payal",
    prop2: true,
};
exampleObj.prop1 = "Hi";
let evh = {
    name: "Payal",
    active: true,
    albums: [1999, 1908, "OU234"],
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ["1", "2", "5"],
};
evh = JP;
// function
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return `Hello!`;
};
console.log(greetGuitarist(JP));
// Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
