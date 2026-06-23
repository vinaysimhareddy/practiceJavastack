
// Reverse a string
// function reverse(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverse("hello world"));

// check palindrome

// function reverse(str) {
//     let palindrome = str.split("").reverse().join("");
//     return str == palindrome;
// }
// console.log(reverse("racecar"));

//Method -2 for palindrome

// let str1 = "racecar";
// console.log(palindrome(str1));
// function palindrome(str1) {
//     let i = 0;
//     let j = str1.length - 1;
//     while (i < j) {
//         if (str1.charAt(i) != str1.charAt(j)) {
//             return false;
//         } else {
//             i++;
//             j--;
//         }
//     }
//     return true;
// }

// Count Vowels
function Count(str) {
    let count = 0;
    let owels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (owels.includes(str.charAt(i))) {
            count++;
        }
    }
    return count;
}
console.log(Count("vinayiii"));