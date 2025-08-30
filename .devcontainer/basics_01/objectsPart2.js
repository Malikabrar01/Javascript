//object Singelton
const tinderUser={}
tinderUser.id="6356gd"
tinderUser.name="Abrar"
tinderUser.isLoggedIn=true
console.log(Object.keys(tinderUser));    //converts to array makes easy to access
console.log(Object.values(tinderUser));  //to get values in array
console.log(Object.entries(tinderUser));  //both keys and values
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checks if thesekeys are present
//console.log(tinderUser);    //prints above object
const regularUser={
    email:"abc@coldmail.com",
    fullName:{
        userFullName:{
            firstName:"Abrar",
            lastName:"Javid"
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullName.userFullName);  //to access specific object
const obj1={1:"ab", 2:"hs"}
const obj2={3:"cd", 4:"js"}   //to add both we can use array method
//const obj3=Object.assign({},obj1,obj2)  //combines both obj
//console.log(obj3)    //using {} ensures that they are copied in new obj and not in obj1
const obj3={...obj1,...obj2}   //also does the same job
//console.log(obj3)