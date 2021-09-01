//put your code here
//input:function
//output:function
const test=(...arguments)=>{
return arguments.reduce((acc,num)=>acc=acc+num)
}
const saveCalls=(funct)=>{
    let calls=[]
    calls.push(funct[arguments]);
    return calls
}
console.log(test(1,2,3))

