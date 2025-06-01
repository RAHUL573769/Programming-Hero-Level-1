"use strict";
const user = {
    firstName: "Mezbaul",
    middleName: "Abedin",
    lastName: "Persion",
};
console.log(user.middleName);
//functions
function add(num1, num2) {
    return num1 + num2;
}
const result = add(12, 6);
console.log(result);
const poorUser = {
    name: "Mezba",
    balance: 0,
    addFunction(balance) {
        return `My new Balance :${this.balance + balance} `;
    },
};
const result1 = poorUser.addFunction(123);
console.log(result1);
const array1 = [1, 34, 5];
console.log(array1);
const userDetails = {
    name: "Rahul Rudra",
    age: 12,
};
console.log(userDetails.age);
const student1 = {
    name: "",
    age: 34,
};
const add = number;
