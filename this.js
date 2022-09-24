/* const shakil = {
    firstName: "shakil",
    lastName: "Hossain",
    getFullName: function(){
        return this.firstName + this.lastName;
    }
}

const rakib = {
    firstName: "rakib ",
    lastName: "Hossain",

}

//1st way by =
rakib.getFullName = shakil.getFullName;
console.log(rakib.getFullName()); //return "rakib hossain"


//2nd way by call()
const fullName = shakil.getFullName.call(rakib);
console.log(fullName);  //return "rakib hossain"

//3rd way by bind()
const fullNameBind = shakil.getFullName.bind(rakib);
console.log(fullNameBind());  //return "rakib hossain"
 
//4th way by apply()
const fullNameApply = shakil.getFullName.apply(rakib);
console.log(fullNameApply)  //return "rakib hossain" */