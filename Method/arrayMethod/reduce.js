/* const numbers = [1,2,3,4,5,6,7,8,9];
const sum = numbers.reduce((precValue, currentValue) => {
    return precValue + currentValue;
},0);

console.log(sum);




const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce(
  (previousValue, currentValue) => {
    if (!previousValue.includes(currentValue)) {
      return [...previousValue, currentValue];
    }
    return previousValue;
  },
  [],
);

console.log(myArrayWithNoDuplicates);


 */

const objArray = [
    {
        name:"pen",
        price:10,
        item:5
    },
    {
        name:"fish",
        price: 200,
        item:5
    },
    {
        name:"fruits",
        price: 300,
        item:4
    }
];

const callBackFun = (previousValue, currentvalue) =>{
    return previousValue + currentvalue.price * currentvalue.item;
};
const initialValue = 0;
const total = objArray.reduce(callBackFun, initialValue);
console.log(total);