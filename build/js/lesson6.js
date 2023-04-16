"use strict";
// Lesson 6
// Class
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder("Payal", "Rock", 42);
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);
//////////////////////----inheritance----///////////////
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 42);
console.log(Sara.getLang());
class Guitarist1 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist1("Jimmy", "guitar");
console.log(Page.play("strums"));
/////////////////////---static------////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
console.log(Peeps.count);
//////////////////////----getters & setters----///////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    // readOnly getter
    get data() {
        return this.dataState;
    }
    // setter
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an arry of string");
    }
}
const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
// myBands.data = ["Van Halen", 7676];
