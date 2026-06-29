class Student{
    public name:string='';
    protected age:number=0;
    private marks:number[]=[];
    
    // constructor() {}
    constructor(name:string,age:number){
        this.age =age;
        this.name = name;
    }
    // constructor(s:Student){
    //     this.age=this.age;
    //     this.name=this.name;
    // }


    public calculatorTotalMarks():number{
        let totalMarks=0;
        this.marks.forEach((x:number)=>{
            totalMarks+=x;
        });
        return totalMarks;
    }

    greetStudent():void{
        console.log(`Hello Good evening ${this.name} and age is ${this.age}`);
    }
    public setMarks(marks :number[]){
        this.marks=marks;
    }
    
}
class student1 extends Student{
    constructor(name:string, age:number) {
        super(name,age);
    }
    getAge():number{//setter
        return this.age;
    }
    
}

var s = new student1("vinay",20); //copy constructor is not possible in typescript(possible in java,c#)
console.log(s.getAge());
console.log(s.name);
s.greetStudent();

var s1 = new Student("vnnnn",27);
s1.setMarks([33,44,55,88,99,88]);

console.log(s1.calculatorTotalMarks())