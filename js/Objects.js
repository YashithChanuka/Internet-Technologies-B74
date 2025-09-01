// Creating an object - Object Literal
let person = {
    firstName: "John",
    lastName: "Cena",
    age: 30,
    hobbies: ['music', 'wrestling'],
    address: {
        street: '123 Main St',
        city: "New York"
    },
    getBirthYear: function () { 
        return 2025 - this.age;
    }
};
console.log(person);

// 1. Accessing objects properties

// Dot notation
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.getBirthYear());

console.log('=============');

// Bracket notation
console.log(person['firstName']);
console.log(person['lastName']);
console.log(person['address']['city']);
console.log(person['getBirthYear']());

console.log("=============");

// 2. Adding properties
person.phone = "08293283432";
console.log(person);

console.log("=============");

// 3. Modify propeties
person.firstName = "Yashith";
person.lastName = "Chanuka";
console.log(person);

console.log("=============");

// 4. Delete properties
delete person.phone;
console.log(person);

console.log("=============");

// 5. Looping Object properties
for (let key in person) { 
    console.log(person[key]);
}

console.log("=============");

// 6. Object destructing
let { firstName, lastName, age, email } = person;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(email); // undefined as no email property in person object

console.log("=============");

// Built-in object functions
console.log(Object.keys(person));

console.log("=============");

console.log(Object.values(person));

console.log("=============");

console.log(Object.entries(person));

console.log("=============");

let car = {
    brand: "Toyota",
    model: "xyz",
    year: 2022,
    getDescription: function () { 
        return `Brand - ${this.brand} ~ model - ${this.model} ~ year - ${this.year}`;
    }
}
console.log(car.getDescription());

console.log("=============");

class Student { 
    constructor(firstName, lastName, age) { 
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() { 
        return `${this.firstName} ${this.lastName}`;
    }
}

let student = new Student('John', 'Cena', 30);
console.log(student);


