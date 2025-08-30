const mySym= Symbol("key1")
 const jsUser={
    name:"Abrar",
    "fullName":"Abrar Javid",
    [mySym]: "myKey1",
    age: 22,
    Married: false,
    jobDays: ["Monday","Tuesday","Wednesday"],
 }
 jsUser.greeting = function(){
    console.log(`Hello JS User, ${this.name}`);
 }
  console.log(jsUser.greeting()); //we cant use any function after using freeze