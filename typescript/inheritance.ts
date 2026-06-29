abstract class student2{
    private marks:number[]=[];
    protected age:number =20;
    public name:string='';

    abstract greetPrivately():void;
    
    abstract calculateTotalMarks():number;
    public printAge():void{
        console.log(this.age);
    }
    public getMarks():number []{
        return this.marks;
    }
}
class child extends student2{

    greetPrivately(): void {
        console.log("this greeting");
    }
    calculateTotalMarks(): number {
        let marks=this.getMarks();
        let total=0;
        marks.forEach(x=>{
            total+=x;
        })
        return total;
    }
    
}

var c = new child();
console.log(c.getMarks());
console.log(c.calculateTotalMarks());