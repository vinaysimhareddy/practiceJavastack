let students =["vinay","mega","sai","sagar","mouni","monkey"];
console.log(students);
students.unshift("kiran");
console.log(students);
students.push("rohit");
console.log(students);
students.pop();
console.log(students);
students.shift();
console.log(students);
console.log(students.length);
// console.log(students.slice(2,5));
// console.log(students.splice(2,5));
console.log(students);

let arr = ["Vinay","Simha","Reddy"];
let string = arr.join("");
console.log(string);
console.log(typeof string);

students.forEach(element => {
    console.log(element);
});

var result = students.reduce((acc,element)=>{
    return acc+"-"+element;
});
console.log(result);