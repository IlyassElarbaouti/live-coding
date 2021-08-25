//input: arr,funct
//output:new array
const filterArrayElements = (arr, callback) => {
    //callback input:el,index,arr
    //output: boolean
  // put you code here
  const res = [];
  for(let index=0;index<arr.length;index+=1){
      const callbackRes = callback(arr[index],index,array);
      if(callbackRes){
          res.push(arr[index]);
      }
  }
  return res;
  
};
//test
const array = [-1,0,1,2,3,4,5];
const callback1 =el=>el%2===0;
const callback2 =el=>el>5;

console.log(filterArrayElements(array,callback1))//===>[0,2,4];
console.log(filterArrayElements(array,callback2))//===>[]