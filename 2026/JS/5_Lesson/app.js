// Person Constructor
// function Person() {
//     this.name = 'Dado';
// }

// const Dado = new Person();
// const Steven  = new Person();

// console.log(Dado);
// console.log(Steven);

// ES 6

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

const mary = new Person('Mary', 'William');

// console.log(mary);
// console.log(mary.firstName);
// console.log(mary.greeting());
// console.log(Person.addNumbers(1,1));

// INHERITANCE / SUB CLASS
class Person1 {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person1 {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('John', 'Doe', '444-555-4444', 'Standard');

console.log(john);
console.log(john.greeting());