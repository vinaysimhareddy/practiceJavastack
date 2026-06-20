let person = {
    name: "sagar",
    age: 28
};

console.log("start");//call stack

setTimeout(() => {
    console.log("setTimeout called"); // macro task queue
    console.log(person);// macro task queue
}, 1000)

console.log("end"); //call stack