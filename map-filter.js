// Problem 1 for loop
/* const number = [2,3,4,5,6,7,8,9];
const output = [];

for(let i = 0; i<number.length; i++){
    let elements = number[i];
    const result = elements * elements;
    output.push(result);
}
console.log(output) */



//problem 2 for loop

/* const num = [1,3,5,7,9];
const output = [];
for(let i = 0; i<num.length; i++){
    const element = num[i];
    const result = element * element;
    let sumIs = 0;
    output.push(result);
}
console.log(output);
 */


// Problem 3 array.map()
//1,2,3,4,5,6 square
/*  const number = [1,2,3,4,5,6]
 const square = (element) =>{
    return element * element;
 }
const result = number.map(square);
console.log(result); */


//problem 4 array.map way 2
//1,2,3,4,5,6 square
/* const number = [1,2,3,4,5,6]
const square = number.map(element => element * element);                //element => element * element
console.log(square);   */                                                  /* const square = (element)=>{ return element*element}*/


//Problem 5 .filter()
//sum every possitive number of (1,-5,-26,50,-4,36,20,26,-29,11,-45)
/* 
const number = [1,-5,-26,50,-4,36,20,26,-29,11,-45];
 const sum = number.filter(element => element>0).reduce((priviousValue, currentValue) => {
    return priviousValue + currentValue;
},0);
console.log(sum); 
*/



 //another way
 /* const number = [1,-5,-26,50,-4,36,20,26,-29,11,-45];
 const posstiveNumber = number.filter(element => element > 0);
 function readyToSum (priviousValue, currentValue){
    return priviousValue + currentValue;
 };
 const sum = posstiveNumber.reduce(readyToSum);
 console.log(sum); */


 //filter, map, find
 /* const students  = [
    {id : 01, name: "Shakil Hossain"},
    {id: 02, name: "Hasan Rakib"},
    {id: 03, name: " ics Rakib Hossan"},
    {id: 04, name: "tanzina akther"}
 ]
 const names = students.map(s => s.name);
 const ids = students.map(i => i.id);
const oldest = students.find(o => o.id>2)
const filterName= students.filter(f => f.name==="Shakil Hossain");


console.log(names);
console.log(ids);
console.log(oldest)
console.log(filterName) */

