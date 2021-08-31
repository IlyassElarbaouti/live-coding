// //option1
// //create empty obj
// //assign elements in valuesList to keysList by index and put it in obj
// //return obj


// //input:keys arr, values arr
// //output:obj
// function buildObject(keysList, valuesList) {
//   // put you code here
//   let obj={}
//   for(let index=0;index<keysList.length;index+=1){
//       obj[keysList[index]]=valuesList[index];
//   }
//   return obj
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);


// //option2
// function buildObject(keysList, valuesList) {
//   // put you code here
//   for(let index=0;index<keysList.length;index+=1){
//       const obj = {}
//       Object.assign(obj,{[keysList[index]]:valuesList[index]})
//   }
//   return obj
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);

// //option3
// function buildObject(keysList, valuesList) {
//   // put you code here
//   for(let index=0;index<keysList.length;index+=1){
//       const obj = {}
//       obj = {...obj,[keysList[index]]:valuesList[valuesList]}
//   }
//   return obj
// }

// // examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
// console.log(result);


//option4
const buildObject=(keysList, valuesList)=> keysList.reduce((obj,key,index)=> ({...obj,[key]:valuesList[index]}),{})
// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);