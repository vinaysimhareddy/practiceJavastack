//1
// let name = "vinay";
// let age = 20;
// let city = "nandyala";
// console.log("My name is " + name + ", I am " + age + " years old and i live in " + city + ".");



//2
// function mul() {
//     let input1 = document.getElementById("price").value;
//     let input2 = document.getElementById("quantity").value;
//     let multi = input1 * input2;

//     let label = document.createElement("label");
//     label.innerText = "Total = " + multi;

//     let resultDiv = document.getElementById("result");
//     resultDiv.innerHTML = "";
//     resultDiv.appendChild(label);
// };

// 3
// let celsius = 30;
// let fahrenheit = (celsius * 9 / 5) + 32;
// console.log(fahrenheit);

// 4
// let n = 5;
// let result = 0;
// for (let num = 1; num <= n; num++) {
//     result += num;
// }
// console.log(result);

//5
// let n = 7;
// let result = 0;
// for (let num = 1; num <= 10; num++) {
//     result = num * n;
//     console.log(result);
// }

// switch statement
//6
// let day = 2;
// switch (day) {
//     case 1: console.log("sunday"); break;
//     case 2: console.log("Monday"); break;
//     case 3: console.log("Tuesday"); break;
//     case 4: console.log("Wednesday"); break;
//     case 5: console.log("Thursday"); break;
//     case 6: console.log("Friday"); break;
//     case 7: console.log("Saturday"); break;
// }

//7
// let num1 = 5;
// let type = "/";
// let num2 = 6;
// switch (type) {
//     case "+": console.log(num1 + num2); break;
//     case "-": console.log(num1 - num2); break;
//     case "*": console.log(num1 * num2); break;
//     case "/": console.log(num1 / num2); break;
// }

// 8
// function square(n) {
//     if (n % 2 == 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// console.log(square(8));

//recursion
//factorial
// function fact(n) {
//     if (n <= 1) { return 1; }
//     return n * fact(n - 1);
// }
// console.log(fact(5));

// sum
// function sum(n) {
//     if (n < 1) { return 0 };
//     return n + sum(n - 1);
// }
// console.log(sum(5));

// fibonachii

// function fibo(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     return fibo(n - 1) + fibo(n - 2);
// }
// console.log(fibo(6));

// max Element
// let arr = [10, 20, 50, 15, 350];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// reverse arr
// let arr = [1, 2, 3, 4];
// let rev = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     rev.push(arr[i]);
// }
// console.log(rev);

//count of properties in the object
// let obj = {
//     name: "john",
//     age: 20,
//     city: "Delhi"
// }
// console.log(Object.keys(obj).length);

//increase salary by 10%

// let salary = 100000;
// let incSalary = salary + (salary / 10);
// console.log(incSalary);

//string reversel
// let str = "hello";
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }
// console.log(rev);

//count vowels
// let input = "javascriptii";
// let vowels = ["a", "e", "i", "o", "u"];
// let count = 0;
// for (let i = 0; i < input.length; i++) {
//     let c = input.charAt(i);
//     if (vowels.includes(c)) {
//         count++;
//     }
// }
// console.log(count);

