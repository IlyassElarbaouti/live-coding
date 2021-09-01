//put your code here
// const vehicle = {
//     move(){
//         console.log(`${this.name} is moving`)
//     },
//     stop(){
//         console.log(`${this.name} stopped`)
//     }
// }
// const getOwnProps


// input 2 objects
// output boolean

// algo
// 1
// 3 join parts of arrays to create one element
// 4 test if array of first object includes all element in array of second object


const object1={
    name:'tom',
    age:18,
}
const object2={
    name:'tom',
    age:18,
}
console.log(Object.entries(object1).toString()===Object.entries(object2).toString())

//turn objects into arrays using Object.entries 
//turn array into string using toString()
//compare strings using ===

