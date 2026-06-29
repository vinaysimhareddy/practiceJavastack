// Tuple representing a 2D point with x and y coordinates
// let point: [number, number] = [10, 20];
// console.log(point);

// function Add(a:number,b:number):number{
//     return a+b;
// }
// console.log(Add(3,3));

/**comment */

// function greet(firstName:string, lastName:string):void{
//     console.log(`Hello Good Morning! ${firstName} ${lastName}`);
// }
// greet("vinay","simha reddy");

// enum Direction {
//     up="paina",
//     down="kinda",
//     right="kudi",
//     left="yedama"
// }
// enum Direction2{
//     up,
//     down,
//     right,
//     left
// }

// console.log(Direction.up);
// console.log(Direction2.up);

// let numbers: number[] = [1, 2, 3, 4, 5];
// console.log(numbers);
// let strings: string[] = ["vinay","simha","reddy"];
// console.log(strings);

interface Address{
    pincode?:number,
    addressFull?:string,
    state:string,
    district?:string
}

// ?(used to make it optional)

interface person{
    name:string,
    age?:number,
    address:Address
}
let persons : person[]=[
    {name:"sagar",address:{ state:"AP"}},
    {name:"vinay",address:{state:"tg"}},
    {name:"GSR",address:{ state:"AP"}}
]

console.log(typeof persons);
let findPersonByState = persons.find(x=>{
    return x.address.state.includes("AP");
})
console.log(findPersonByState)