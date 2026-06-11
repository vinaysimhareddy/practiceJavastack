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

function AB(){
    BC();
}
function BC(){
    console.trace("trace:");
}

function add(a,b){
    console.log("trace:");
    AB();
    return a+b;
}

console.log(add(1,3));
console.log(add(5,5));