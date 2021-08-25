const numbersList = [5,0,8,10,-4,50,220];
console.log(`before map ${numbersList}`);
//input:callback function
//output: array
//---callback function
//input: number , index(optional), array (optional)
//output: number
//option1
//const mapRes =numbersList.map(function(el){return el*el})
//option2
const mapRes =numbersList.map(el=> el*el)
console.log(mapRes)
console.log(`after map ${numbersList}`);

//======forEach
//input: callback function
//output: undefined
//input: number , index(optional), array (optional)
//output: undefined
console.log(`numbersList before forEach ${numbersList}`)
const foreachRes =numbersList.forEach(el =>{
    if(el>0){
       console.log(el);
    }
})
console.log(foreachRes);
console.log(`numbersList after forEach ${numbersList}`);

//=====find
//input:callback function
//output:number || undefined
//-----callback
//input:number, index ,array
//output:boolean || undefined
//option1
//const findRes = numbersList.find(el=>{
 /*   if(el % 2 ===0 && el>0){
        return true;
    }
    return false
})*/
//option2
const findRes = numbersList.find(el=> el % 2 ===0 && el>0 )
console.log(findRes)

//=====reduce
const transactions = [5,4,8,6,4,-2,44,56,7,4];
//input:callback , number(acc initial value)
//output:num
//===callback
//input:acc,number,index,arr
//output: number
transactions.reduce((res,el,index)=>{
    console.log('step :'+index+', acc is' +acc +'element is: '+element)
    res+=el;
    return res;
})


