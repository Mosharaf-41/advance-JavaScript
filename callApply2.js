const normalPerson = {
    firstName : 'Ayman',
    lastName :'Sadik',
    salary: 20000,
    getFullName :  function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function (amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName : 'Hero',
    lastName : 'Alom',
    salary: 32000
}
const zeroPerson = {
    firstName : 'zero',
    lastName : 'Alom',
    salary: 12000
}
const peroPerson = {
    firstName : 'pero',
    lastName : 'Alom',
    salary: 14000
}

// normalPerson.chargeBill();

// const heroBill = normalPerson.chargeBill.bind(heroPerson);
// heroBill(2000);
// heroBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const zeroBill = normalPerson.chargeBill.bind(zeroPerson);
// zeroBill(1500);
// console.log(zeroPerson.salary);


// normalPerson.chargeBill.call(zeroPerson, 3000);
// // normalPerson.chargeBill.call(heroPerson, 3000, 200, 60);
// normalPerson.chargeBill.call(heroPerson, 3000, 100, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(peroPerson, 5000, 500, 50);
// console.log(peroPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000,  500, 50]);
normalPerson.chargeBill.apply(heroPerson, [5000,  900, 500]);
console.log(heroPerson.salary);