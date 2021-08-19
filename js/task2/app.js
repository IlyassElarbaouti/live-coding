const numberList1 =[1,2,3,4,5];
console.log(numberList1);
const res = numberList1.pop();
console.log(res);
console.log(numberList1);
//-----------------push
const numberList2 =[1,2];
console.log(`before push ${numberList2}`);
const res1 = numberList2.push(6);
console.log(res1);
console.log(`after push ${numberList2}`);

//----------shift
const numberList3 =[1,2,3,4,5];
console.log(`before shift ${numberList3}`);
const res3 = numberList3.shift();
console.log(res3);
console.log(`after shift ${numberList3}`);

//----------slice
const numberList4 =[1,2,3,4,5];
console.log(`before slice ${numberList4}`);
const res4 = numberList4.slice(2);
console.log(res4);
console.log(`after slice ${numberList4}`);

//======callback
//input: num , num , callback function
//output:undefined
function sum(from,to,printer){
    let sum = 0;
    for(let index=from ; index<=to;index+=1){
        sum+=index;
    }
    printer(sum);
}
function printResult(res){
    console.log(res);
}

sum(5,8,printResult)
//----------
//input:callback
//ooutput:arr

//callback
//input:num , index(optional) , array(optional)
//output: boolean
const anotherNumberList =[5,0,8,4,-10,50,220];
console.log(`before filter ${anotherNumberList}`);
/*function filterCallback(element){ 
    console.log(element)
    if(element>5){
        return true
    } 
    else{
        return false
    }
}*/
    

const filterRes = anotherNumberList.filter(el=>el>5);
console.log(filterRes)
console.log(`after filter ${anotherNumberList}`)


