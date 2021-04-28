const normalPerson = {
    firstName : 'Ayman',
    lastName :'Sadik',
    salary: 20000,
    getFullName :  function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function (amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}

normalPerson.chargeBill(2000);
normalPerson.chargeBill(5000);
console.log(normalPerson.salary);