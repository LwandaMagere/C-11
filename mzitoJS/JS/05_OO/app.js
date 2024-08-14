///////////////////// ES6 CLASSES

    // class Person {
    //     constructor(firstName, lastName, birthday) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.birthday = new Date(1987);
    //     }

    //     greeting() {
    //       return  `Hello there ${this.firstName} ${this.lastName}`;
    //     }

    //     calculateAge() {
    //         const diff = Date.now() - this.birthday.getTime();
    //         const ageDate = new Date(diff);
    //         return Math.abs(ageDate.getUTCFullYear() - 1970);
    //     }

    //     static addNumber(x, y) {
    //         return x + yield;
    //     }
    // }

    // const mary = new Person('Dado', 'Steven', '6-6-1999');

    // console.log(mary.calculateAge());


//////////////////// INHERITANCE / SUBCLASSES

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName};`
    }
}

// Subclass of person
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;

    }
}

const john = new Customer('John', 'Doe', '555-555-5555', 'standard');
console.log(john)
console.log(john.greeting())


// static method is the one u can use without instatiating an object