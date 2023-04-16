// Lesson 7

// Index Signatures & keyof Assertions

// interface TransactionObj {
//   readonly [index: string]: number; // index(key) should be string and value should be number
// }

interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]);

const todayNet = (transactions: TransactionObj): number => {
  let total = 0;

  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todayNet(todaysTransactions));

// can not change (readonly)
// todaysTransactions.Pizza = 40;

console.log(todaysTransactions["Dave"]); // o/p = undefined

/////////////////////////////////////// when you do not have Index signatures use key assertions

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Payal",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

// display key: value dynamically using key assertions

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// display value dynamically using key assertions

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

// when function does not return it returns void

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key} : ${student[key]}`);
};

// display student GPA & name
logStudentKey(student, "GPA");
logStudentKey(student, "name");

/////////////////---Index signatur----////////////////////////

// interface Incomes {
//   [key: string | number]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

// utility type Record
// key as a literal

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

// display the value

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
