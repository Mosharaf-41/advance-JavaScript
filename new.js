class Person {
    constructor (firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Alom', 20000);
console.log(heroPerson);
const zeroPerson = new Person('Zero', 'Ayman', 25000);
console.log(zeroPerson);

function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Siam', 'Khan', 14000);
console.log(oldPerson);