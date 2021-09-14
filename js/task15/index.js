function printMessage(country, city) {
  console.log(this);

  console.log(`Hello, ${this.firstName}. My age is ${this.age}. I am from ${country}, ${city}`);
}

const user = {
  firstName: 'Andrey',
  age: 111,
  tempFunc: 'some secret data',
};
console.dir(printMessage);
console.log(user);
printMessage('Ukraine','Lviv');

// option 1
printMessageBinded = printMessage.bind(user)('UK' , 'London');


// option 2 
printMessageBinded = printMessage.bind(user, 'UK' , 'London');
printMessageBinded('france','paris')

// option 3
printMessageBinded = printMessage.bind(user, 'UK' );
printMessageBinded('London');

// input: func,context, args
// output: func

function myBind(funct,context,...args){
return function(...funcArgs) {
  funct.call(context ,...args,...funcArgs)
};
}

// function sayHi(age){
//   console.log(`hi ${this.firstName} , i am ${age}`)
// }

// const myBind1 = myBind(sayHi,user,18);
// myBind1()