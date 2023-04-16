// Lesson 6

// Class

class Coder {
  secondLang!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Payal", "Rock", 42);

console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave.lang);

//////////////////////----inheritance----///////////////

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 42);
console.log(Sara.getLang());
// console.log(Sara.age);
// console.log(Sara.lang);

//////////////////////----interface----///////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist1 implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist1("Jimmy", "guitar");
console.log(Page.play("strums"));

/////////////////////---static------////////////////////////

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
console.log(Peeps.count);

//////////////////////----getters & setters----///////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  // readOnly getter
  public get data(): string[] {
    return this.dataState;
  }

  // setter
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;

      return;
    } else throw new Error("Param is not an arry of string");
  }
}

const myBands = new Bands();

myBands.data = ["Neil Young", "Led Zep"];

console.log(myBands.data);

myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);

// myBands.data = ["Van Halen", 7676];
