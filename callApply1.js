const normalPerson = {
    firstName : 'Ayman',
    lastName :'Sadik',
    salary: 20000,
    getFullName :  function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
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

const heroBill = normalPerson.chargeBill.bind(heroPerson);
heroBill(2000);
heroBill(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const zeroBill = normalPerson.chargeBill.bind(zeroPerson);
zeroBill(1500);
console.log(zeroPerson.salary);