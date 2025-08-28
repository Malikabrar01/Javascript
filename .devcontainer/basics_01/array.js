let arr1=["batman","superman","antman"]
let arr2=["ironman","hulk"]
//arr.push(12)                                  //adds 12 at end
//arr.pop()                                     // removes last element
//arr.unshift(43)                               //adds 43 at start
//arr.shift()                                   // removes first element ie 43
//let arrCopy1=arr.slice(1,3) 
//console.log(arr)                              //original array does't change
//console.log(arrCopy1)
//let arrCopy2=arr.splice(1,3) 
//console.log(arr)
//console.log(arrCopy2)                         //original array changes
//arr1.push(arr2)                               // it just puts array inside array
//console.log(arr1)
//const arr4=arr1.concat(arr2)                  //this adds better
//const arr4=[...arr1,...arr2]                  //also adds both arrays but can add multiple together
//console.log(arr4)
//const arr5=[1,2,3,[3,8,1],5,[2,[1,7,0]]]
//console.log(arr5.flat(Infinity))              //removes internal arrays and converts into linear array
//console.log(Array.from('abrar'))              // convers abrar to array of 5 alphabet
let score1=5
let score2=3
let score3=9
console.log(Array.of(score1,score2,score3))      //converts above scores to array