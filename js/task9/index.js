//input:obj,obj
//output:boolean
// function compareKeys(obj1,obj2){
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//     if (key1.length !== key2.length){
//         return false
//     }
//     for(let index = 0;index<keys1.length; index+=1){
//         const key1=keys1[index];
//         const key2=keys2[index];

//         const value1 = obj1[key1];
//         const value2 = obj2[key2];

//         if(value1 !== value2){
//             return false
//         }
//     }
//     return true
// }
//option2
function compareKeys(obj1,obj2){
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (key1.length !== key2.length){
        return false
    }
    for(let index = 0;index<keys1.length; index+=1){
        const key1=keys1[index];
        const key2=keys2[index];

        const value1 = obj1[key1];
        const value2 = obj2[key2];

        if(value1 !== value2){
            return false
        }
    }
    return true
}

const object1={
    name:'tom',
    age:18,
}
const object2={
    age:18,
    name:'tom',
}
compareKeys(object1,object2)

