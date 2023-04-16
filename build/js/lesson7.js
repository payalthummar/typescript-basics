"use strict";
// Lesson 7
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todayNet = (transactions) => {
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
const student = {
    name: "Payal",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
// display key: value dynamically using key assertions
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// display value dynamically using key assertions
Object.keys(student).map((key) => {
    console.log(student[key]);
});
// when function does not return it returns void
const logStudentKey = (student, key) => {
    console.log(`Student ${key} : ${student[key]}`);
};
// display student GPA & name
logStudentKey(student, "GPA");
logStudentKey(student, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
// display the value
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
