let input = [1, 2, 3, 2, 4, 5, 1];
let arr = new Set();
let result = new Set();
for (let i = 0; i < input.length; i++) {
    if (arr.has(input[i])) {
        result.add(input[i]);
    }
    arr.add(input[i]);
}
console.log([...result]);
