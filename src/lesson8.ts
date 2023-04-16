// Lesson 8

// Generics

// T - it will work any type

const echo = <T>(arg: T): T => arg;

// utility functions

//checks whether a given argument is an object, but not an array or null.

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true)); //false
console.log(isObj("Payal")); //false
console.log(isObj([1, 2, 3])); //false
console.log(isObj({ name: "Payal" })); // true
console.log(isObj(null)); //false

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  // describe an array
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }

  // describe an object
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

/////////////////////////////////////

interface BoolCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
  // describe an array
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }

  // describe an object
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

//////////////////////////////

interface HasID {
  id: number;
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here

  return user;
};

console.log(processUser({ id: 1, name: "Payal" }));

// must be Id inside object
// console.log(processUser({ id: 1, name: "Payal" }));

/////////

// T is object, K is key [] is value
const getUsersProperty = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

const usersArray = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));

/////////////////////////////////////

class StateObject<T> {
  private data: T;
  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }

  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("Payal");

console.log(store.state);

//it execpt only strin, if you pass first string value
store.state = "Dave";

// store.state = 12;

// using union types it excepts any types
const myState = new StateObject<(string | number | boolean)[]>([15]);
myState.state = ["Dave", 42, true];

console.log(myState.state);
