class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "BejoyNagar High school";
    }
}
const student1 = new Student(01, "Shakil Hossain");
const student2 = new Student(02, "Hasan Rakib");
const student3 = new Student(03, "Rakib Hossain");

console.log(student1);
console.log(student2);
console.log(student3);

class Office {
    constructor(sId, name){
        this.id = sId;
        this.name = name;
    }
}

const jobHolder1 = new Office(01, "Shakil hossain");