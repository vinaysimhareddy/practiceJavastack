let person = {
    name: "Vinay Simha Reddy",
    age: 20,
    place: "NANDAYAL ANDHRA PRADESH",
    address: {
        state: {
            code: "AP"
        }
    }
}
//seal - change or modify the existing data but cannot add new data
// freeze - cannot change or modify the existing data and cannot add new data just freeze data
// Object.seal(person);
// person.class = "BTech";
// person.age = 28;
// delete person.age;
// console.log(person);

// if (!Object.isFrozen(person) && !Object.isSealed(person)) {
//     person.age = 25;
//     person.name = "vinay";
// }
// console.log(person);

// let person2 = Object.assign({}, person);
// person2.age = 25;
// person2.name = "mega";
// person2.address.state.code = "TN";
// console.log(person2);
// console.log(person);

let person2 = JSON.parse(JSON.stringify(person));
let person3 = { ...person2 };
person2.age = 25;
person2.name = "mega";
person2.address.state.code = "TN";
console.log(person);
console.log(person2);
console.log(person3);