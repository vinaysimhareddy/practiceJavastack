// function add(a,b){
//     return a+b;
// }
// let result = add(3,7);
// console.log(result);
// let result2 = add(22, 28);
// console.log(result2);   

// function Person(name,age){
//     this.name= name;
//     this.age=age;
// }
// let person = new Person("vinay",20); //constructor function
// console.log(person);
// console.log(typeof person);
// console.log(typeof add);

// function AB(){
//     BC();
// }
// function BC(){
//     console.trace("trace:");
// }

// function add(a,b){
//     console.log("trace:");
//     AB();
//     return a+b;
// }

// console.log(add(1,3));
// console.log(add(5,5));

//normal function or name function 
// function add() {
//     console.log("adding");
// }
// debugger

// //function expression or anonymous function
// var greet = function () {
//     console.log("Hello anonymous function");
// }

// //arrow function
// var greet1 = () => {
//     console.log("Hello Arrow function")
// }
// greet();
// greet1();
// add();

let person = {
    name: "vinay",
    city: "nandyal",
    greeet: function () {
        console.log("Hello " + this.name + " welcome to " + this.city);
    }
}
person.greeet();
person.greeet.call()
