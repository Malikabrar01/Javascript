//singleton
//Object.create
//object literals
const mySym= Symbol("key1")
 const jsUser={
    name:"Abrar",
    "fullName":"Abrar Javid",
    [mySym]: "myKey1",
    age: 22,
    Married: false,
    jobDays: ["Monday","Tuesday","Wednesday"],
 }
 console.log(jsUser.jobDays)
  console.log(jsUser['jobDays'])
  console.log(jsUser['fullName'])  //we cant use .fullName here to access 
  console.log(jsUser[mySym])       //Important
  jsUser.fullName="Malik Abrar Javid"
  console.log(jsUser['fullName'])   //To update values
  Object.freeze(jsUser)            //Now we cant update this object
   Object.freeze(jsUser.fullName)  //if we want to fix specific things
  jsUser.fullName="Malik Abrar Javid 2"
  console.log(jsUser['fullName'])   
  console.log(jsUser)