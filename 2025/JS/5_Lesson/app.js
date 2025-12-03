// 1.CLASSES

// class Person {
//     constructor(firstName, LastName, dob) {
//         this.firstName = firstName;
//         this.LastName = LastName;
//         this.birthday = new Date(dob);
//     }

//     greeting() {
//         return `Hello ${this.firstName} ${this.LastName}`;
//     }

//     calculateAge() {
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970); 
//     }

//     getsMarried(newLastName) {
//         this.LastName = newLastName;
//     }

//     // Static method
//     static addNumbers(x,y) {
//         return x + y;
//     }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');

// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());
// console.log(mary.getsMarried('Thompson')); // check the object last name added

// console.log(Person.addNumbers(1, 2)); 

// 2. INHERITANCE (Sub-classes)

// class Person {
//     constructor(firstName, LastName) {
//         this.firstName = firstName;
//         this.LastName = LastName;
//     }

//     greeting() {
//         return `Hello there ${this.firstName} ${this.LastName}`;
//     }
// }

// class Customer extends Person {
//     constructor(firstName, LastName, phone, membership) {
//         super(firstName, LastName);
//         this.phone = phone;
//         this.membership = membership;
//     }
// }

// const john = new Customer('John', 'Doe', '555-555-5555', 'standard');

// console.log(john);
// console.log(john.greeting());

